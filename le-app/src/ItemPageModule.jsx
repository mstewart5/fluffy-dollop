import { useNavigate } from 'react-router-dom'
import {
    Group,
    MantineProvider,
    Center,
    Stack,
    Image,
    Title,
    ScrollArea,
    Text,
    Paper,
    ActionIcon,
    Tooltip
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

function ItemPageModule({ data }) {
    const navigate = useNavigate();
    return (
        <MantineProvider>

            {data.map(item => (
                <div style={
                    {
                        backgroundImage: `url(${item.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100vh',
                    }}>
                    <div style={{ backdropFilter: 'blur(15px)', height: '100vh' }}>


                        <Center>
                            <Paper withBorder radius='md' shadow='xl' style={
                                {
                                    display: 'flex',
                                    width: '50rem',
                                    marginTop: '13rem',
                                    textWrap: 'wrap',
                                    wordBreak: 'break-all',
                                    backdropFilter: 'blur(10px)'
                                }}>
                                <Tooltip label="Back to listings">
                                    <ActionIcon style={
                                        {
                                            position: 'absolute',
                                            margin: '20px',
                                            zIndex: '1'
                                        }}
                                        onClick={() => navigate('/mainpage')}>
                                        <IconArrowLeft />
                                    </ActionIcon>
                                </Tooltip>
                                <Image src={item.imageUrl} h={500} w={376} style={
                                    {
                                        border: '2px solid',
                                        borderRadius: '10px',
                                        margin: '10px'
                                    }} />
                                <Stack justify='flex-start' align='flex-start' style={
                                    {
                                        height: '500px',
                                        marginLeft: '10px',
                                        margin: '10px'
                                    }}>
                                    <Group justify='space-between' style={{ width: '24rem' }}>
                                        <Title order={3}>{item.title}</Title>
                                        <Title order={3}>Author: {item.author}</Title>
                                    </Group>
                                    <Text>Listed on: {item.publishedDate}</Text>
                                    <Text>Location: {item.location}</Text>
                                    <Text>Contact info: {item.contactInfo}</Text>
                                    <ScrollArea offsetScrollbars>
                                        <Text>Author's description:</Text>
                                        <Text>{item.description}</Text>
                                    </ScrollArea>
                                </Stack>
                            </Paper>
                        </Center>
                    </div>
                </div>
            ))}
        </MantineProvider>
    );
}
export default ItemPageModule