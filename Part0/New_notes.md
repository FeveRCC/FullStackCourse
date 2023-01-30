```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server
    
    Note over User : User fill the text field
    User ->> Browser : User click the submit button
    Browser ->> Server : HTTP POST code 302 https://studies.cs.helsinki.fi/exampleapp/new_note
    Server ->> Browser : HTTP GET code 304 https://studies.cs.helsinki.fi/exampleapp/notes
    
```
