import React, { useState } from "react";
import "./styles.css";

const listItemsLeft = [
  { id: 1, firstName: "Jaswant", lastName: "Mandloi" },
  { id: 2, firstName: "Ashok", lastName: "Mishra" },
  { id: 3, firstName: "Nishant", lastName: "Pandya" },
  { id: 4, firstName: "Narendra", lastName: "Khajja" }
];

const listItemsRight = [
  { id: 5, firstName: "Etienne", lastName: "Joshef" },
  { id: 6, firstName: "Trisha", lastName: "Dimayuga" }
];
const [transferList, setTransferList] = useState({
    leftListItems: listItemsLeft,
    rightListItems: listItemsRight
  });
export default function App() {
  
  return (
    <div className="App">
      <TransferLists
        LeftListRow={LeftListRow}
        RightListRow={RightListRow}
        setTransferList={setTransferList}
        transferList={transferList}
      />
    </div>
  );
}

const LeftListRow = ({ firstName, lastName }) => {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
    </tr>
  );
};
const RightListRow = LeftListRow;

const Table = ({ children }) => {
  return <table>{children}</table>;
};

const toggleElementSelection = ({
  selectedElements,
  elementIndex,
  selectedElement,
  selector
}) => {
  const updatedSelectedElements = { ...selectedElements };
  if (updatedSelectedElements[elementIndex]) {
    delete updatedSelectedElements[elementIndex];
  } else {
    updatedSelectedElements[elementIndex] = selectedElement;
  }
  selector(updatedSelectedElements);
};

const transferItems = ({ selectedElements, transferedElements }) => {
  const filteredTransferElementsWithSelectedElements = transferedElements.filter(
    (transferedElement) => {
      return !selectedElements[transferedElement.id];
    }
  );

  return [
    ...filteredTransferElementsWithSelectedElements,
    ...Object.values(selectedElements)
  ];
};

const filterTransferListAgainstSelectedItems = ({
  selectedElements,
  transferedElements
}) => {
  const filteredTransferElementsWithSelectedElements = transferedElements.filter(
    (transferedElement) => {
      return !selectedElements[transferedElement.id];
    }
  );

  return filteredTransferElementsWithSelectedElements;
};

const TransferList = ({
  transferItems,
  selectedItems,
  itemSelector,
  ListRow
}) => {
  return (
    <div>
      <Table>
        {transferItems.map((transferItem) => {
          return (
            <div
              className={selectedItems[transferItem.id] ? "selectedItem" : ""}
              key={transferItem.id}
              onClick={() => {
                toggleElementSelection({
                  selectedElements: selectedItems,
                  elementIndex: transferItem.id,
                  selectedElement: transferItem,
                  selector: itemSelector
                });
              }}
            >
              <ListRow {...transferItem} />
            </div>
          );
        })}
      </Table>
    </div>
  );
};

const TransferLists = ({
  LeftListRow,
  RightListRow,
  transferList,
  setTransferList
}) => {
  const [leftSelectedItems, setLeftSelectedItems] = useState({});
  const [rightSelectedItems, setRightSelectedItems] = useState({});

  return (
    <div className="transferList">
      <TransferList
        transferItems={transferList.leftListItems}
        selectedItems={leftSelectedItems}
        itemSelector={setLeftSelectedItems}
        ListRow={LeftListRow}
      />
      <div>
        <div
          onClick={() => {
            setTransferList({
              ...transferList,
              leftListItems: transferItems({
                selectedElements: rightSelectedItems,
                transferedElements: transferList.leftListItems
              }),
              rightListItems: filterTransferListAgainstSelectedItems({
                selectedElements: rightSelectedItems,
                transferedElements: transferList.rightListItems
              })
            });

            setLeftSelectedItems({});
          }}
          className={
            Object.keys(rightSelectedItems).length ? "activeTransferButton" : ""
          }
        >
          &lt;
        </div>
        <div
          onClick={() => {
            setTransferList({
              ...transferList,
              rightListItems: transferItems({
                selectedElements: leftSelectedItems,
                transferedElements: transferList.rightListItems
              }),
              leftListItems: filterTransferListAgainstSelectedItems({
                selectedElements: leftSelectedItems,
                transferedElements: transferList.leftListItems
              })
            });
            setRightSelectedItems({});
          }}
          className={
            Object.keys(leftSelectedItems).length ? "activeTransferButton" : ""
          }
        >
          &gt;
        </div>
      </div>

      <TransferList
        transferItems={transferList.rightListItems}
        selectedItems={rightSelectedItems}
        itemSelector={setRightSelectedItems}
        ListRow={RightListRow}
      />
    </div>
  );
};
