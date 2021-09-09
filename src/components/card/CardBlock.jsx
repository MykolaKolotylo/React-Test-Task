import './CardBlock.css';
import React, {useState} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {CardHeader, IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

import InnerCard from "../inner-card/InnerCard";

const CardBlock = () => {
    const [count, setCount] = useState(0);

    return (
        <Card>
            <CardHeader
                action={
                    <IconButton aria-label="settings" onClick={() => setCount(count + 1)}>
                        <AddIcon/>
                    </IconButton>
                }
                title="Add New Text Block"
            />
            <CardContent>
                {[...Array(count)].map((_, i) => <InnerCard key={i}/>)}
            </CardContent>
        </Card>
    );
}

export default CardBlock;
