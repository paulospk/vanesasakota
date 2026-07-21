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
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  phone?: string
  referral?: string
  message?: string
  submittedAt?: string
}

const Email = ({
  name = 'Someone',
  email = '',
  phone = '',
  referral = '',
  message = '',
  submittedAt = '',
}: Props) => {
  const submitted = submittedAt
    ? new Date(submittedAt).toLocaleString('en-AU', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'Australia/Sydney',
      })
    : ''

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New enquiry from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New contact enquiry</Heading>
          <Text style={muted}>Submitted via vanesasakota.com.au</Text>

          <Section style={card}>
            <Row label="Name" value={name} />
            <Row label="Email" value={email} />
            {phone ? <Row label="Phone" value={phone} /> : null}
            {referral ? <Row label="Referral source" value={referral} /> : null}
            {submitted ? <Row label="Submitted" value={submitted} /> : null}
          </Section>

          <Heading as="h2" style={h2}>
            Message
          </Heading>
          <Text style={messageStyle}>{message}</Text>

          <Hr style={hr} />
          <Text style={footer}>
            Reply directly to this email to respond to {name}.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const Row = ({ label, value }: { label: string; value: string }) => (
  <Text style={rowStyle}>
    <span style={rowLabel}>{label}: </span>
    <span style={rowValue}>{value}</span>
  </Text>
)

export const template = {
  component: Email,
  subject: (data: Props) => `New enquiry from ${data?.name ?? 'website visitor'}`,
  displayName: 'Contact form — notification to Vanesa',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+61 400 000 000',
    referral: 'Google search',
    message: 'Hi Vanesa, I would like to book an initial consultation to discuss ongoing anxiety.',
    submittedAt: new Date().toISOString(),
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
}
const container = { padding: '32px 28px', maxWidth: '580px' }
const h1 = {
  color: 'hsl(222, 47%, 11%)',
  fontFamily: 'Fraunces, Georgia, serif',
  fontSize: '26px',
  fontWeight: 500,
  margin: '0 0 6px',
}
const h2 = {
  color: 'hsl(222, 47%, 11%)',
  fontFamily: 'Fraunces, Georgia, serif',
  fontSize: '18px',
  fontWeight: 500,
  margin: '24px 0 8px',
}
const muted = { color: 'hsl(215, 16%, 47%)', fontSize: '13px', margin: '0 0 20px' }
const card = {
  backgroundColor: 'hsl(195, 30%, 96%)',
  padding: '18px 20px',
  border: '1px solid hsl(195, 30%, 88%)',
}
const rowStyle = { margin: '4px 0', fontSize: '14px', lineHeight: '1.5' }
const rowLabel = { color: 'hsl(215, 16%, 47%)' }
const rowValue = { color: 'hsl(222, 47%, 11%)' }
const messageStyle = {
  color: 'hsl(222, 47%, 11%)',
  fontSize: '15px',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap' as const,
}
const hr = { borderColor: 'hsl(195, 30%, 88%)', margin: '28px 0 16px' }
const footer = { color: 'hsl(215, 16%, 47%)', fontSize: '13px' }
