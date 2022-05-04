year_time = range(2014,2016)
year_time_2 = range(2015,2017)

month_time = ['0101', '0201', '0301', '0401', '0501', '0601', '0701', '0801', '0901', '1001', 
              '1101', '1201']

# Range for 2014
for x in year_time:
        for month in month_time:
            print(str(x) + month)
            
# Range for 2015-2016clcle
for n in year_time_2:
    for month in month_time:
        print(str(n) + month)