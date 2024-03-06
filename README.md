# POC - Stripe Payment Gateway

This Proof of Concept (POC) integrates the Stripe payment gateway for seamless transactions between clients and vendors. It enables clients to book services and pay securely while allowing vendors to manage their bank accounts within the platform. The integration includes handling Stripe webhooks for real-time updates and incorporates the 1099 API for automated tax reporting for vendors.

## Installation

1. Clone the repository:


```bash
git clone https://github.com/shivi1000/POC-Stripe.git

```

## Branch Switch

1. Switch to dev branch:

```bash
git checkout dev

```


## 1.1 Project Structure

- **src:** Source code of the POC-Stripe Payment Gateway


## Installation

- Install dependencies:

```bash
npm install

```


## 1.2 Environment Setup

- Create bin folder in root directory

```bash
mkdir bin

```

- Create a file named

```bash
.env.dev

```

## Base configuration

```bash
PORT=8004           //replace with your NestJS port

```


## MONGO DB

```bash
URI=''              //add your mongodb database url

```

## STRIPE

```bash
STRIPE_PUBLISHABLE=''                          //add your stripe credentials
STRIPE_SECRET=''
STRIPE_PAYOUT_WEBHOOK_SECRET=''
STRIPE_ACCOUNT_WEBHOOK_SECRET=''
STRIPE_PAYMENT_WEBHOOK_SECRET=''
STRIPE_IDENTITY_WEBHOOK_SECRET=''
STRIPE_REFUND_WEBHOOK_SECRET=''

```


## 1.3 Start the Project

- Start the service:

```bash
npm run dev

```


## 2.7 API Documentation

- **_Stripe API:_** http://localhost:8004/swagger#/


