/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import fetchData from '../data/DATA';
import useLocalStorage from '../hooks/useLocalStorageHook';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useLocalStorage('data', []);
  const [checkedItems, setCheckedItems] = useLocalStorage('checkedItems', {});
  const [selectAllChecked, setSelectAllChecked] = useLocalStorage('selectAllChecked', false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null); // State to hold error information

  const keysToRender = [
    "Image_1",
    "SKU",
    "Name",
    "Title",
    "Description",
    "Brand",
    "Cost Price",
    "Quantity",
    "size",
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setData(data);
        setFilteredData(data); // Initialize filtered data with the full dataset
        console.log('Data fetched successfully:', data);
      } catch (error) {
        setError(error.message); // Set error message
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, [setData]);

  useEffect(() => {
    filterData(searchQuery);
  }, [searchQuery, data]);

  useEffect(() => {
    // Check if all items are checked
    const allChecked = filteredData.length > 0 && filteredData.every(item => checkedItems[item.SKU]);
    setSelectAllChecked(allChecked);
  }, [filteredData, checkedItems]);

  const filterData = (query) => {
    if (!query) {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        keysToRender.some((key) =>
          item[key]?.toString().toLowerCase().includes(query.toLowerCase())
        )
      );
      setFilteredData(filtered);
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => {
      const newCheckedItems = { ...prev, [id]: !prev[id] };
      return newCheckedItems;
    });
  };

  const handleSelectAllChange = (checked) => {
    const newCheckedItems = {};
    filteredData.forEach((item) => {
      newCheckedItems[item.SKU] = checked;
    });
    setCheckedItems(newCheckedItems);
    setSelectAllChecked(checked);
  };

  return (
    <DataContext.Provider value={{ data, filteredData, keysToRender, capitalizeFirstLetter, setSearchQuery, checkedItems, handleCheckboxChange, handleSelectAllChange, selectAllChecked, error }}>
      {children}
      {error && <p>Error: {error}</p>} {/* Display error message */}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContext;
