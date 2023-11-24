export const filterStyles = {
  container: provided => ({
    ...provided,
    width: '100%',
    fontSize: 16
  }),
  control: (provided, state) => {
    return {
      ...provided,
      backgroundColor:  "#F5F7F8",
      height: 34,
      minHeight: 34,
      borderRadius: "12px",
      boxShadow: "none",
      borderColor: '#CBD9CE'
    };
  },
  singleValue: (provided, state) => ({
    ...provided,
    color: state.hasValue ? "black" : "inherit",
    top: 16
  }),
  placeholder: provided => ({
    ...provided,
    color: "#718196",
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    height: 34,
    color: state.hasValue ? "black" : "inherit",
    padding: "0px 8px",
    fontSize: "15px",

  }),
  input: (provided, state) => ({
    ...provided,
    color: state.hasValue ? "black" : "inherit"
  }),
  indicatorsContainer: provided => ({
    ...provided,
    height: 34,
  }),
  dropdownIndicator: provided => ({
    ...provided,
    // display: "none"
  }),
  clearIndicator: provided => ({
    ...provided,
    color: "black"
  }),
  indicatorSeparator: provided => ({
    ...provided,
    height: 34,
    display: "none",
    minHeight: 34
  }),
  menu: provided => ({
    ...provided,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: "12px"
  }),
  option: (provided, state) => ({
    ...provided,
    borderRadius: "12px",
    backgroundColor: state.isSelected ? "#CBD9CE" : 'white',
    fontWeight: state.isSelected ? "bold" : state.fontWeight,
    color: state.isSelected ? "black" : state.color,
    fontSize: "15px",
    paddingTop: '5px',
    paddingBottom: '5px',

    "&:hover": {    
      cursor: 'pointer',                                       
      backgroundColor: '#EDEDED',                                      
    },
  })
};