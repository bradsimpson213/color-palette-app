// React imports
import React from 'react';
// Custom Component imports
import DraggableColorBox from './DraggableColorBox';
// Drag and Drop HOC imports
import { SortableContainer } from 'react-sortable-hoc';
// Utility imports
import { v4 as uuid } from 'uuid';

const DraggableColorList = ({ colors, handleDelete }) => {
    return (
        <div style={{ height: "100%" }} >
            { colors.map((color, index) => (
            <DraggableColorBox
              key={ uuid() }
              index= { index }
              color={ color } 
              handleDelete={ handleDelete }
            />))}      
        </div>
    )
    
};

export default SortableContainer(DraggableColorList);