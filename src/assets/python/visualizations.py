import csv
from datetime import datetime
import numpy as np
from matplotlib import pyplot as plt

def crime_through_the_day(all_incidents):
    import csv
from datetime import datetime
import numpy as np
from matplotlib import pyplot as plt

def crime_by_the_unit(unit, all_incidents):
    #list that will save all times
    times = []

    with open(all_incidents, 'r') as file:
        reader = csv.DictReader(file)

        #for each incident
        for row in reader:
            #format the date and time
            time = datetime.strptime(row['Time Reported'], '%I:%M %p')
            date = datetime.strptime(row['Date Reported'], '%m/%d/%Y')
            #select the desired unit of time
            if unit=="minute" or "hour":
                specificUnit = getattr(time, unit)
            if unit=="month" or unit=="year":
                specificUnit = getattr(date, unit)
            #add it to the list of all times
            times.append(specificUnit)

        # Create the line plot depending on the unit of time
        if unit == "minute":
            minute_graph(times)
        if unit == "hour":
            hour_graph(times)
        if unit == "month":
            month_graph(times)
        if unit == "year":
            year_graph(times)

def minute_graph(times):
    #determine number of instances of each hour
    unique_hours, frequencies = np.unique(times, return_counts=True)
    #plot number of instances
    plt.plot(unique_hours, frequencies, marker='o')
    plt.xlabel('Time')
    #format x-axis label
    plt.xticks(ticks = np.array(range(6))*10, labels=[":" + str(i) for i in np.array(range(6))*10])
    plt.ylabel('Number of Incidents Reported')
    plt.title('Time of Day of Incident Reports by Public Safety 2018-2023')
    plt.savefig('vis/crimePerMinute.png')
    plt.close()
    print("1 -- Created crime thoughout the day graph")

def hour_graph(times):
    #determine number of instances of each hour
    unique_hours, frequencies = np.unique(times, return_counts=True)
    #plot number of instances
    plt.plot(unique_hours, frequencies, marker='o')
    plt.xlabel('Time')
    #format x-axis label
    plt.xticks(ticks = np.array(range(5))*6, labels=[str(i)+":00" for i in np.array(range(5))*6])
    plt.ylabel('Number of Incidents Reported')
    plt.title('Time of Day of Incident Reports by Public Safety 2018-2023')
    plt.savefig('vis/crimePerHour.png')
    plt.close()
    print("2 -- Created crime thoughout the day graph")

def month_graph(times):
    #determine number of instances of each month
    unique_months, frequencies = np.unique(times, return_counts=True)
    #plot number of instances
    plt.plot(unique_months, frequencies, marker='o')
    plt.xlabel('Month')
    #format x-axis label
    plt.xticks(ticks = np.array(range(12)) + 1, labels=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"])
    plt.ylabel('Number of Incidents Reported')
    plt.title('Number of Incident Reports per Month by Public Safety 2018-2023')
    plt.savefig('vis/crimePerMonth.png')
    plt.close()
    print("3 -- Created crime per month graph")

def year_graph(times):
    #determine number of instances of each year
    unique_years, frequencies = np.unique(times, return_counts=True)
    #plot number of instances
    plt.plot(unique_years, frequencies, marker='o')
    plt.xlabel('Year')
    #format x-axis label
    plt.xticks(ticks = np.array(range(5)) + 2018)
    plt.ylabel('Number of Incidents Reported')
    plt.title('Number of Incident Reports per Year by Public Safety 2018-2023')
    plt.savefig('vis/crimePerYear.png')
    plt.close()
    print("4 -- Created crime per year graph")

crime_by_the_unit("minute", "csvs/all_incidents.csv")

crime_by_the_unit("hour", "csvs/all_incidents.csv")

crime_by_the_unit("month", "csvs/all_incidents.csv")

crime_by_the_unit("year", "csvs/all_incidents.csv")