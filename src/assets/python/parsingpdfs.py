import os
import csv
import PyPDF2
from datetime import datetime

# these headers are the column names in the created csv files
# the order of headers is the same as in the pdf so that the function parses the incident data in the correct order
pdfHeaders = [
    'Incident Type',
    'Location',
    'Date/Time Reported',
    'Case #',
    'Notes',
    'Incident Occurred Between',
    'Int. Ref. #',
    'Disposition'
]
csvHeaders = [
    'Incident Type',
    'Location',
    'Date Reported',
    'Time Reported',
    'Case #',
    'Notes',
    'Incident Occurred Between',
    'Int. Ref. #',
    'Disposition'
]

def parse_pdfs_to_csvs(pdf_folder, csv_folder):
    # make sure the csv folder exists, if not create it
    os.makedirs(csv_folder, exist_ok=True)

    # for each pdf in the folder !!
    for filename in os.listdir(pdf_folder):
        if filename.endswith('.pdf'):
            # create the full path name for the pdf in its folder
            pdf_path = os.path.join(pdf_folder, filename)
            csv_path = os.path.join(csv_folder, filename.replace('.pdf', '.csv'))

            # open + process
            with open(pdf_path, 'rb') as pdf_file:
                reader = PyPDF2.PdfReader(pdf_file)
                incidents = []

                # put all text in pdf into one string
                full_text = ''
                for page in reader.pages:
                    full_text += page.extract_text()

                # split into incident blocks
                incident_blocks = full_text.split('Incident Type:')
                # add back "Incident Type:" to each incident block since it was removed with the .split()
                incident_blocks = ['Incident Type:' + block for block in incident_blocks[1:]]

                # go through each incident block
                for block in incident_blocks:
                    # create a dictionary for this incident with empty values, headers are the keys and empty strings are the values
                    incident_data = {}
                    for header in pdfHeaders:
                        if (header == "Date/Time Reported"):
                            incident_data["Date Reported"] = ""
                            incident_data["Time Reported"] = ""
                        else:
                            incident_data[header] = ""
                    
                    # go through each header (incident type, location, etc.)
                    for i, header in enumerate(pdfHeaders):
                        try:
                            # find where this header field starts
                            start_idx = block.find(f"{header}:")
                            if start_idx == -1:  # skip if the header isnt found
                                continue
                                
                            # move past the header text and colon
                            start_idx += len(header) + 1
                            
                            # find where this header field ends (at the start of the next header)
                            next_header = pdfHeaders[i + 1] if i + 1 < len(pdfHeaders) else None
                            if next_header:
                                end_idx = block.find(f"{next_header}:", start_idx)
                                if end_idx == -1:
                                    content = block[start_idx:].strip()
                                else:
                                    content = block[start_idx:end_idx].strip()
                            else:
                                # for the last header, take all the remaining text in the incident block
                                content = block[start_idx:].strip()

                            # remove page numbers
                            if header == "Disposition":
                                if (content[-4:] == "Page"):
                                    index = -5
                                    s = content[index]
                                    while index*-1 < len(content) and (s.isnumeric() or s==" " or s=="o" or s=="f"):
                                        index -= 1
                                        s = content[index]
                                    content = content [:index]

                            # separate date and time data
                            if (header == "Date/Time Reported"):
                                date_time_list = content.split(" ", 1)
                                incident_data["Date Reported"] = date_time_list[0]
                                incident_data["Time Reported"] = date_time_list[1]

                            # add the content to the incident data dictionary
                            else:
                                incident_data[header] = content
                                
                        except Exception as e:
                            # if there is an error, print it and add an empty string to the incident data dictionary
                            print(f"Error processing {header}: {str(e)}")
                            incident_data[header] = ''

                    # add the incident data dictionary to the list of incidents
                    incidents.append(incident_data)

                # put the incidents into a new csv file, if the file already exists, its overwritten
                with open(csv_path, 'w', newline='', encoding='utf-8') as csv_file:
                    writer = csv.DictWriter(csv_file, fieldnames=csvHeaders)
                    writer.writeheader()
                    writer.writerows(incidents)

    print("1 -- pdfs have been put into csvs !!!")

def merge_csvs(csv_folder, output_filename):
    # list to store all of the incidents from all of the csvs created in parse_pdfs_to_csvs()
    all_incidents = []

    # go through each csv in the csvs folder
    for filename in os.listdir(csv_folder):
        if filename.endswith('.csv') and not filename.endswith("all_unique_locations.csv"):
            csv_path = os.path.join(csv_folder, filename)

            # read all of the rows (the incidents) from this csv
            with open(csv_path, 'r', newline='', encoding='utf-8') as csv_file:
                reader = csv.DictReader(csv_file)
                for row in reader:
                    all_incidents.append(row)

    # sort all of the incidents by date/time

    # # convert the date string in thi incident to a datetime object for proper sorting
    # all_incidents.sort(key=lambda x: datetime.strptime(x['Date Reported'], '%m/%d/%Y'))

    # put the (not sorted) incidents into a new csv file in the csvs folder
    output_path = os.path.join(csv_folder, output_filename)
    with open(output_path, 'w', newline='', encoding='utf-8') as csv_file:
        writer = csv.DictWriter(csv_file, fieldnames=csvHeaders)
        writer.writeheader()
        writer.writerows(all_incidents)

    print(f"2 -- all of the csvs have been merged into {output_path} !!!")

def extract_unique_locations(input_filename, output_filename, csv_folder):

    # create a set to store unique locations (the set makes sure there are no duplicates)
    unique_locations = set()

    # read + look through the merged csv file to get all of the unique locations
    input_path = os.path.join(csv_folder, input_filename)
    with open(input_path, 'r', newline='', encoding='utf-8') as csv_file:
        reader = csv.DictReader(csv_file)
        # extract the location field from each row
        for row in reader:
            unique_locations.add(row['Location'])

    # put the unique locations into a new csv file in the csvs folder
    output_path = os.path.join(csv_folder, output_filename)
    with open(output_path, 'w', newline='', encoding='utf-8') as csv_file:
        writer = csv.writer(csv_file)
        writer.writerow(['Location'])  # write the header
        # put each unique location into the csv file
        for location in unique_locations:
            writer.writerow([location])

    print(f"3 -- unique locations have been extracted to {output_path} !!!")

def extract_unique_dispositions(input_filename, output_filename, csv_folder):
    # create a dict to store unique status as keys and count as value
    status = {}
    
    # read + look through the merged csv file to get all of the unique statuses
    with open(input_filename, 'r', newline='', encoding='utf-8') as csv_file:
        reader = csv.DictReader(csv_file)
        # extract the status field from each row
        for row in reader:
            # increase the count of the existing status
            if row["Disposition"] in status:
                status[row["Disposition"]]["Count"] += 1
            # or create the first count of a new status
            else:
                status[row["Disposition"]] = {"Disposition":row["Disposition"], "Count":1}

    # put the unique locations into a new csv file in the csvs folder
    output_path = os.path.join(csv_folder, output_filename)
    with open(output_path, 'w', newline='', encoding='utf-8') as csv_file:
        writer = csv.DictWriter(csv_file, fieldnames=["Disposition", "Count"])
        writer.writeheader()
        writer.writerows(status.values())

    print(f"4 -- unique dispositions have been extracted to {output_path} !!!")


def extract_unique_crime_type(input_filename, output_filename, csv_folder):
    # create a dict to store unique status as keys and count as value
    crime = {}
    
    # read + look through the merged csv file to get all of the unique statuses
    with open(input_filename, 'r', newline='', encoding='utf-8') as csv_file:
        reader = csv.DictReader(csv_file)
        # extract the status field from each row
        for row in reader:
            # increase the count of the existing status
            if row["Incident Type"] in crime:
                crime[row["Incident Type"]]["Count"] += 1
            # or create the first count of a new status
            else:
                crime[row["Incident Type"]] = {"Crime":row["Incident Type"], "Count":1}

    # put the unique locations into a new csv file in the csvs folder
    output_path = os.path.join(csv_folder, output_filename)
    with open(output_path, 'w', newline='', encoding='utf-8') as csv_file:
        writer = csv.DictWriter(csv_file, fieldnames=["Crime", "Count"])
        writer.writeheader()
        writer.writerows(crime.values())

    print(f"4 -- unique crime types have been extracted to {output_path} !!!")

# number 1: parse pdfs into csvs
parse_pdfs_to_csvs('pdfs', 'csvs')

# number 2: merge all of the csvs into one big csv
merge_csvs('csvs', 'all_incidents.csv')

# number 3: extract unique locations from the merged csv into a new csv
extract_unique_locations('all_incidents.csv', 'all_unique_locations.csv', 'csvs')

# number 4: extract unique dispositions from the merged csv into a new csv
extract_unique_dispositions('csvs/all_incidents.csv', 'all_unique_dispositions.csv', 'csvs')

# number 5: extract unique crime types from the merged csv into a new csv
extract_unique_crime_type('csvs/all_incidents.csv', 'all_unique_crime_types.csv', 'csvs')

