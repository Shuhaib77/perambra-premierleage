import React from 'react'

function ContactCard({ icon, title, subtitle, value }) {
  return (
      <div className="h-[202px] w-full space-y-3 bg-[#ffffff75] p-5 rounded-xl">
      <h1 className="text-3xl">{icon}</h1>
      <h1 className="text-xl font-semibold">{title}</h1>
      <h1 className="text-sm opacity-80">{subtitle}</h1>
      <h1 className="font-medium">{value}</h1>
    </div>
  )
}
 export default ContactCard