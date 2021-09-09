import './CardBlock.css';
import React, {useState} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {CardHeader, IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {DragDropContext, Droppable} from "react-beautiful-dnd";

import {getBlocks, reorder} from '../../common/utils';
import InnerCard from "../inner-card/InnerCard";

const CardBlock = () => {
    const [blocks, setBlocks] = useState(getBlocks(1));

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        const reorderedBlocks = reorder(
            blocks,
            result.source.index,
            result.destination.index
        );
        setBlocks(reorderedBlocks);
    }


    return (
        <Card>
            <CardHeader
                action={
                    <IconButton aria-label="settings" onClick={() => setBlocks([...blocks, ...getBlocks(1)])}>
                        <AddIcon/>
                    </IconButton>
                }
                title="Add New Text Block"
            />
            <CardContent>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="list">
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {blocks.map((_, i) => <InnerCard key={i} index={i}/>)}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </CardContent>
        </Card>
    );
}

export default CardBlock;
