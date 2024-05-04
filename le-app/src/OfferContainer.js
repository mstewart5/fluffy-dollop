import React from 'react';
import { MantineProvider, Text, Card, Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import styles from './css/mainpage.module.css';
import { useNavigate } from 'react-router-dom';
function GridComponent({ data }) {
    const navigate = useNavigate()
    function handleClick(path) {
        navigate(path)
    }
    return (
        <MantineProvider>
            <Carousel withIndicators
                height="450px"
                slideSize="10%"
                slideGap="xs"
                loop
                align="start"
                slidesToScroll={3}>
                {data.map( (item, index) => (
                    // <Paper withBorder='xl'>
                    <Carousel.Slide 
                    key={index}>
                            <Card shadow="sm" padding="lg" radius="md" withBorder
                            className={styles.slide}
                            onClick={() => handleClick(`/item/offer/${item.offerId}`)}>
                                <Card.Section>
                                    <Image
                                    src={item.imageUrl}
                                    width={250}
                                    height={250}
                                    alt={item.title}
                                    />
                                </Card.Section>

                                <Text fw={500} style={{marginTop: '5px'}}>{item.title}</Text>

                                <Text size="sm" c="dimmed">Author: {item.author}</Text>
                                <Text size="sm" c="dimmed">Published Date: {item.publishedDate}</Text>
                                </Card>
                    </Carousel.Slide>
                    // </Paper>
                ))}
            </Carousel>
        </MantineProvider>
    );
}

export default GridComponent;