## ADDED Requirements

### Requirement: Prevent malicious API abuse
The system must restrict automated and high-frequency requests.

#### Scenario: Bot scripts the API endpoint
- **WHEN** a script without a valid reCAPTCHA token calls the optimization API
- **THEN** the backend rejects the request with a HTTP 403 / Forbidden immediately.

#### Scenario: High volume requests from single IP
- **WHEN** a user or proxy has made more than 30 requests in a short time
- **THEN** the API returns HTTP 429 Too Many Requests.
