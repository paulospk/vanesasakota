/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
}

const Email = ({ name }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thank you for reaching out</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Thank you for reaching out</Heading>
        <Text style={text}>{name ? `Hi ${name},` : 'Hello,'}</Text>
        <Text style={text}>
          Thank you for your message. I've received your enquiry and will get back to you
          personally within two business days.
        </Text>
        <Text style={text}>
          If your matter is urgent or you need immediate support, please contact your GP,
          call Lifeline on 13 11 14, or dial 000 in an emergency.
        </Text>
        <Text style={text}>Warmly,<br />Vanesa Sakota</Text>
        <Hr style={hr} />
        <Text style={footer}>
          Vanesa Sakota — Registered Psychotherapist
          <br />
          vanesasakota.com.au
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'Thank you for reaching out — Vanesa Sakota',
  displayName: 'Contact form — confirmation to sender',
  previewData: { name: 'Jane' },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
}
const container = { padding: '32px 28px', maxWidth: '560px' }
const h1 = {
  color: 'hsl(222, 47%, 11%)',
  fontFamily: 'Fraunces, Georgia, serif',
  fontSize: '26px',
  fontWeight: 500,
  margin: '0 0 16px',
}
const text = {
  color: 'hsl(222, 47%, 11%)',
  fontSize: '15px',
  lineHeight: '1.65',
  margin: '0 0 14px',
}
const hr = { borderColor: 'hsl(195, 30%, 88%)', margin: '28px 0 16px' }
const footer = { color: 'hsl(215, 16%, 47%)', fontSize: '13px', lineHeight: '1.5' }
