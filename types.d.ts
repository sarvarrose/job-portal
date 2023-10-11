type Experience = {
  minumum: number
  maximum: number
}
type Salary = {
  minumum: number
  maximum: number
}

export type Listing = {
  id: string
  avatar: string
  jobTitle: string
  industry: string
  companyName: string
  location: string
  remoteType: string
  totalEmployees: string
  remoteType: string
  experience: Experience
  salary: Salary
  applyType: 'now' | 'external'
  created_at: string
}
