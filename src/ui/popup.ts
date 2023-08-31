type Domain = {
  name: string;
  time: Date,
}

const populateDomainsList = async () => {
  const restrictedDomains = await chrome.storage.local.get("domains")

  const domains = restrictedDomains.domains as Domain[]

  if (domains) {
    domains.forEach((domain) => {
      const domainList = document.getElementById('list-domain')
      const listItem = document.createElement('ul')
      listItem.classList.add("list-item")
      listItem.textContent = domain.name
  
      domainList?.append(listItem)
    })
  }
}

populateDomainsList()

const getFormData = () => {
  const domainNameElement = document.getElementById('name-domain') as HTMLInputElement
  const domainTimeElement = document.getElementById('time-domain') as HTMLInputElement

  return {
    name: domainNameElement.value,
    time: domainTimeElement.value
  }
}

const addNewDomainRestriction = async () => {
  const { name, time } = getFormData() 

  const restrictedDomains = await chrome.storage.local.get("domains")

  const formattedTime = time + ":00"

  const date = new Date(formattedTime)

  console.log(date)

  const domain: Domain = {
    name: name!.toString(),
    time: date,
  }

  let domains = restrictedDomains.domains as Domain[]

  if (!domains) {
    domains = []
  }

  domains.push(domain)

  chrome.storage.local.set({
    domains: domains
  })

  populateDomainsList()
}

const newDomainButton = document.getElementById('new-domain-button')

newDomainButton?.addEventListener("click", addNewDomainRestriction)