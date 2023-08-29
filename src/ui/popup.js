const populateDomainsList = async () => {
  const restrictedDomains = await chrome.storage.local.get("domains")

  const domains = restrictedDomains.domains

  domains.forEach((domain) => {
    const domainList = document.getElementById('list-domain')
    const listItem = document.createElement('ul')
    listItem.classList.add("list-item")
    listItem.textContent = domain

    domainList.append(listItem)
  })
}

populateDomainsList()

const addNewDomainRestriction = async () => {
  // const restrictedDomains = await chrome.storage.local.get("domains")
  chrome.storage.local.set({
    domains: ["www.linkedin.com"]
  })

  populateDomainsList()
}

const newDomainButton = document.getElementById('new-domain')

newDomainButton.addEventListener("click", addNewDomainRestriction)