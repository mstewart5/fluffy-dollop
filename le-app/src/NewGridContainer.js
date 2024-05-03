import React from 'react';
import { Paper, Grid, MantineProvider } from '@mantine/core';

function GridComponent({ data }) {
    return (
        <MantineProvider>
            <Grid>
                {data.map(item => (
                    <Paper withBorder='xl'>
                        <Grid.Col span='content'>
                            <div>
                                <h2>{item.title}</h2>
                                {item.imageUrl && <img src={item.imageUrl} width={250} height={250} alt={item.title} />}
                                <p>
                                    <span>Author: {item.author}</span><br />
                                    <span>Published Date: {item.publishedDate}</span>
                                </p>
                            </div>
                        </Grid.Col>
                    </Paper>
                ))}
            </Grid>
        </MantineProvider>
    );
}

export default GridComponent;