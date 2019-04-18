import React from 'react';
import '../style/DateTimeRange.css';
import momentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import Cell from './Cell';
class CalendarRow extends React.Component {
  generateCells() {
    let cells = [];
    let daysSize = this.props.rowDays.length;
    for (let i = 0; i < daysSize; i++) {
      cells.push(
        <Cell
          key={i}
          cellDay={this.props.rowDays[i]}
          date={this.props.date}
          otherDate={this.props.otherDate}
          maxDate={this.props.maxDate}
          month={this.props.month}
          year={this.props.year}
          dateSelectedNoTimeCallback={this.props.dateSelectedNoTimeCallback}
          keyboardCellCallback={this.props.keyboardCellCallback}
          focusOnCallback={this.props.focusOnCallback}
          focusDate={this.props.focusDate}
          cellFocusedCallback={this.props.cellFocusedCallback}
        />,
      );
    }
    return cells;
  }

  render() {
    let cells = this.generateCells();
    return <div className="calendarGrid">{cells}</div>;
  }
}

CalendarRow.propTypes = {
  rowDays: PropTypes.array.isRequired,
  date: momentPropTypes.momentObj.isRequired,
  otherDate: momentPropTypes.momentObj,
  maxDate: momentPropTypes.momentObj,
  dateSelectedNoTimeCallback: PropTypes.func.isRequired,
  keyboardCellCallback: PropTypes.func.isRequired,
  focusOnCallback: PropTypes.func.isRequired,
  focusDate: PropTypes.any.isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  cellFocusedCallback: PropTypes.func.isRequired,
};

export default CalendarRow;
