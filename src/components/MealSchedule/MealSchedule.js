import React from "react";

const MealSchedule = ({meals}) => {
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Guest Name</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meals, index) => {
            return (
              <tr data-testid="meals" key={index}>
                <td data-testid="meals-dateCheckIn">{meals.dateCheckIn}</td>
                <td data-testid="meals-dateCheckout">{meals.dateCheckout}</td>
                <td data-testid="meals-name">{meals.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MealSchedule;