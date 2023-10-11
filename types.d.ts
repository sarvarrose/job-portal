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
  experienceMinimum: number
  experienceMaximum: number
  salaryMinimum: number
  salaryMaximum: number
  applyType: 'now' | 'external'
  created_at: string
}

export type ListingCreatePayload = Omit<Listing, 'id' | 'avatar' | 'created_at'>

export type ListingUpdatePayload = Partial<ListingCreatePayload> & { id: string }
