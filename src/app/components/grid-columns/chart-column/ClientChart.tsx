'use client';

import React from 'react';
import {SparkLineChart} from '@mui/x-charts';

interface Props {
    data: [number, number][];
}

export function ClientChart({data}: Props) {
    return (
        <div>
            <SparkLineChart data={data.map(d => d[1])} width={140} height={40}/>
        </div>
    );
}