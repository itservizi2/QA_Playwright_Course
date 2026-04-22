# The "+tag" Trick for Unique Emails in API Testing

Let’s dig into how those “unique emails” like `john_smith+1@yahoo.com` actually work and why they’re so useful in API testing.

## How the +tag trick works

Most major email providers (Gmail, Yahoo, Outlook/Hotmail) allow you to add a plus sign and extra text after your username but before the `@domain`.

**Example:**

**Base email:** `john_smith@yahoo.com`

**Variants:**

- `john_smith+1@yahoo.com`
- `john_smith+test@yahoo.com`
- `john_smith+newman@yahoo.com`

All of these still deliver mail to the same inbox (`john_smith@yahoo.com`), but the system treats them as **unique addresses**.

## Why it’s useful in testing

- **Avoid collisions**: Your API enforces unique emails for registration. Adding `+1`, `+2`, etc. makes each request unique without needing multiple real accounts.
- **Traceability**: You can tell which test run created which account by looking at the suffix.
- **Automation-friendly**: Easy to generate programmatically (`+{{$randomInt}}` or `+{{$guid}}` in Postman).


## Practical examples in Postman/Newman

**Static suffixes in your data file (users.json)**

```json
[
  { 
    "name": "John Smith", 
    "email": "john_smith+1@yahoo.com", 
    "password": "Passw111" 
  },
  { 
    "name": "Jane Doe", 
    "email": "jane_doe+2@gmail.com", 
    "password": "Passw222" 
  },
  { 
    "name": "Mark Lee", 
    "email": "mark_lee+3@hotmail.com", 
    "password": "Passw333" 
  }
]
```


## Things to keep in mind

- Not all corporate mail servers support the +tag trick, but Gmail/Yahoo/Outlook do.
- If your API validates email strictly, make sure it allows `+` in the local part (most do, since it’s RFC-compliant).
- For production tests, you might want to delete test accounts afterward to avoid cluttering the database.

***



