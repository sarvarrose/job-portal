export const baseUrl = 'https://6525362867cfb1e59ce6e0f3.mockapi.io/api'

export const formFields = {
  stepOne: [
    {
      id: 'jobTitle',
      name: 'Job Title',
      placeholder: 'ex. UI UX Designer',
      required: true
    },
    {
      id: 'companyName',
      name: 'Company Name',
      placeholder: 'ex. Google',
      required: true
    },
    {
      id: 'industry',
      name: 'Industry',
      placeholder: 'ex. Information Technology',
      required: true
    },
    {
      id: 'location',
      name: 'Location',
      placeholder: 'ex. Chennai',
      narrow: true
    },
    {
      id: 'remoteType',
      name: 'Remote Type',
      placeholder: 'ex. In-Office',
      narrow: true
    }
  ],
  stepTwo: [
    {
      id: 'experienceMinimum',
      name: 'Experience Minimum',
      placeholder: 'Minimum'
    },
    {
      id: 'experienceMaximum',
      name: 'Experience Maximum',
      placeholder: 'Maximum'
    },
    {
      id: 'salaryMinimum',
      name: 'Salary Minimum',
      placeholder: 'Minimum'
    },
    {
      id: 'salaryMaximum',
      name: 'Salary Maximum',
      placeholder: 'Maximum'
    },
    {
      id: 'totalEmployees',
      name: 'Total Employee',
      placeholder: 'ex. 100',
      required: true
    },
    {
      id: 'applyType',
      name: 'Apply Type',
      options: {
        now: 'Quick apply',
        external: 'External apply'
      }
    }
  ]
}
