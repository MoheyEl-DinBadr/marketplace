import React, { useState } from 'react';
    import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';

    const Chat: React.FC = () => {
      const [messages, setMessages] = useState<string[]>([]);
      const [inputValue, setInputValue] = useState('');

      const handleSend = () => {
        if (inputValue.trim()) {
          setMessages([...messages, inputValue]);
          setInputValue('');
        }
      };

      return (
        <div>
          <List>
            {messages.map((message, index) => (
              <ListItem key={index}>
                <ListItemText primary={message} />
              </ListItem>
            ))}
          </List>
          <TextField
            label="Type a message"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button variant="contained" color="primary" onClick={handleSend}>
            Send
          </Button>
        </div>
      );
    };

    export default Chat;
