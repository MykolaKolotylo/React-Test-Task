import './InnerCard.css';
import React, {} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import TextBlock from '../text-block/TextBlock';

const InnerCard = () => {
    return (
        <Card className={'inner-card'}>
            <CardContent>
                <TextBlock/>
            </CardContent>
        </Card>
    );
}

export default InnerCard;
