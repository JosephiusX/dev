import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import pandas_datareader.data as web
import yfinance as yf

from datetime import date

# start and end date variables 
today = date.today()
print(today)

end= today
end

start = (2021,6,1)
start


# import stocks
shop = web.DataReader('SHOP', 'yahoo',start=start, end=end)
tsla = web.DataReader('TSLA', 'yahoo',start=start, end=end)
dg = web.DataReader('DG', 'yahoo',start=start, end=end)
gush = web.DataReader('GUSH', 'yahoo',start=start, end=end)
saia = web.DataReader('SAIA', 'yahoo',start=start, end=end)
aapl = web.DataReader('AAPL', 'yahoo',start=start, end=end)
spy = web.DataReader('spy', 'yahoo',start=start, end=end)

def cumulative(df,get_absolute=True): # takes in df and weather or not price is absolute$$ (true by default)
    initial_price = df['Adj Close'].iloc[0]
    final_price = df['Adj Close'].iloc[-1]
    # Absolute --> $ Amount
    if get_absolute:
        return final_price - initial_price
    
    # NORMALIZES (% Gain )
    else:
        return 100* (final_price-initial_price)/initial_price

# cumulative(shop) # $ gain per share

# we make a new coloum for each of our df's with the daily cumulative returns (DOLLAR AMOUNT)
def create_cumulative_abs(df):
    df['Cumulative Absolute'] = df['Adj Close']- df['Adj Close'].iloc[0]
    return df

    # applying to stocks im watching
aapl = create_cumulative_abs(aapl)
shop = create_cumulative_abs(shop)
dg = create_cumulative_abs(dg)
saia = create_cumulative_abs(saia)
tsla = create_cumulative_abs(tsla)
gush = create_cumulative_abs(gush)
spy = create_cumulative_abs(spy)

def calc_cum_perc(df):
    df['Percent Change'] = 100*(df['Adj Close']-df['Adj Close'].iloc[0])/df['Adj Close'].iloc[0]
    return df

aapl = calc_cum_perc(aapl)
tsla = calc_cum_perc(tsla)
shop = calc_cum_perc(shop)
dg = calc_cum_perc(dg)
saia = calc_cum_perc(saia)
gush = calc_cum_perc(gush)
spy = calc_cum_perc(spy)

# tsla # working


plt.figure(figsize=(10,3),dpi=200)
aapl['Percent Change'].plot(label='AAPL')
shop['Percent Change'].plot(label='SHOP')
saia['Percent Change'].plot(label='SAIA')
tsla['Percent Change'].plot(label='TSLA')
spy['Percent Change'].plot(label='SPY')
dg['Percent Change'].plot(label='DG')
gush['Percent Change'].plot(label='GUSH')

plt.legend()