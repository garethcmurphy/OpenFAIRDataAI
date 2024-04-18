import streamlit as st
import pandas as pd

# Create sample data
data = {'Country': ['France 🇫🇷', 'Germany 🇩🇪', 'Italy 🇮🇹', 'Spain 🇪🇸'],
        'Visitors': [23, 31, 18, 25]}

df = pd.DataFrame(data)

# Title and Text with emojis
st.title("Tourist Arrivals in Europe ️")
st.write("A sample app showing a bar chart and data table ")

# Display bar chart
st.bar_chart(df['Visitors'])

# Display DataFrame with options
st.dataframe(df, width=800, height=300)

# Customize DataFrame display (optional)
st.dataframe(df.style.set_properties(**{'background-color': 'lightblue',
                                       'color': 'black',
                                       'border-color': 'white'}))
