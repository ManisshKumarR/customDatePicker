import { forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DashboardDatePicker = ({
  dateInputClassName,
  value,
  onChange,
  minDate,
  maxDate,
  startDate,
  endDate,
  dateFormat,
}) => {
  const CustomDateInput = forwardRef(({ value, onClick, className }, ref) => (
    <div className={className} ref={ref} onClick={onClick}>
      {value}
    </div>
  ));

  return (
    <ReactDatePicker
      dateFormat={dateFormat}
      selected={value}
      minDate={minDate}
      maxDate={maxDate}
      startDate={startDate}
      endDate={endDate}
      onChange={(value) => {
        if (value) onChange(value);
      }}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      popperClassName="filter-calendar"
      customInput={<CustomDateInput className={dateInputClassName} />}
    />
  );
};

export default DashboardDatePicker;
