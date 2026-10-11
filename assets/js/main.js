/**
 * Neerej Dev - Academic Portfolio JavaScript
 * Handles Theme Toggling, Live Instant Search, BibTeX Modals, Filters, and Mobile Nav
 */

// Publications data for live search and BibTeX
const publicationsData = [
  {
    id: "dev2026algorithmic",
    title: "Algorithmic Acculturation in Adult Social Care: Migrant Workers, Conversational AI and the Making of Professional English",
    authors: "Neerej Dev",
    year: "forthcoming",
    venue: "Journal of Ethnic and Migration Studies",
    type: "journal",
    pdf: "files/Neerej_Dev_CV.pdf",
    url: "https://orcid.org/0000-0003-3918-2406",
    abstract: "Investigates how Malayali migrant care workers in the UK negotiate the punitive linguistic and regulatory demands of adult social care using conversational AI models (ChatGPT and Google Gemini), developing the conceptual framework of algorithmic acculturation.",
    bibtex: `@article{dev2026algorithmic,
  author = {Dev, Neerej},
  title = {Algorithmic Acculturation in Adult Social Care: Migrant Workers, Conversational AI and the Making of Professional English},
  journal = {Journal of Ethnic and Migration Studies},
  year = {forthcoming}
}`
  },
  {
    id: "dev2026from",
    title: "From Rivermind to Care Homes: Settler Dreams and Britain’s Care Crisis",
    authors: "Neerej Dev",
    year: "2026",
    venue: "Economic and Political Weekly, 61(11)",
    type: "journal",
    pdf: "files/From-Rivermind-to-Care-Homes-Settler-Dreams-EPW-2026.pdf",
    doi: "10.71279/epw.v61i11.44344",
    url: "https://doi.org/10.71279/epw.v61i11.44344",
    abstract: "Examines how post-Brexit immigration policies and the UK adult care crisis produce precarious labor conditions for South Asian migrant men, tracing aspirations from Kerala's rivermind geographies to British care institutions.",
    bibtex: `@article{dev2026from,
  author = {Dev, Neerej},
  title = {From Rivermind to Care Homes: Settler Dreams and Britain’s Care Crisis},
  journal = {Economic and Political Weekly},
  volume = {61},
  number = {11},
  year = {2026},
  doi = {10.71279/epw.v61i11.44344}
}`
  },
  {
    id: "dev2026human",
    title: "Human Voices and Algorithmic Echoes: Resignifying Transfeminine Experiences Through Hybrid Poetics Framework",
    authors: "Neerej Dev and Silpa Joy",
    year: "2026",
    venue: "International Journal of Human–Computer Interaction",
    type: "journal",
    pdf: "files/Human-Voices-and-Algorithmic-Echoes-IJHCI-2026.pdf",
    doi: "10.1080/10447318.2026.2615218",
    url: "https://doi.org/10.1080/10447318.2026.2615218",
    abstract: "Proposes a Hybrid Poetics Framework (HPF) to evaluate whether LLMs (GPT-4o) can authentically resonate with marginalized transfeminine lived realities, using poetic inquiry and an incentivized Turing-style discernment protocol.",
    bibtex: `@article{dev2026human,
  author = {Dev, Neerej and Joy, Silpa},
  title = {Human Voices and Algorithmic Echoes: Resignifying Transfeminine Experiences Through Hybrid Poetics Framework},
  journal = {International Journal of Human--Computer Interaction},
  year = {2026},
  doi = {10.1080/10447318.2026.2615218}
}`
  },
  {
    id: "dev2025transcending",
    title: "Transcending Silences: Queer(ing) Cinematic Memory of the Malayalee ‘Spectacle’",
    authors: "Neerej Dev and Silpa Joy",
    year: "2025",
    venue: "Literature & Aesthetics",
    type: "journal",
    pdf: "",
    url: "https://scholar.google.com/citations?user=PYp7N-kAAAAJ&hl=en",
    abstract: "Explores queer representations and spectatorship in contemporary Malayalam cinema, analyzing how cinematic archives both reproduce and rupture normative gender subjectivities.",
    bibtex: `@article{dev2025transcending,
  author = {Dev, Neerej and Joy, Silpa},
  title = {Transcending Silences: Queer(ing) Cinematic Memory of the Malayalee ‘Spectacle’},
  journal = {Literature \\& Aesthetics},
  year = {2025}
}`
  },
  {
    id: "dev2025young",
    title: "Review of Young People, Media, and Nostalgia: An Ethnography of How Youth Imagine Their Lives (Rodrigo Muñoz-González)",
    authors: "Neerej Dev and Silpa Joy",
    year: "2025",
    venue: "Anthropological Forum",
    type: "review",
    pdf: "files/Young-People-Media-and-Nostalgia-Review-2025.pdf",
    doi: "10.1080/00664677.2025.2550301",
    url: "https://doi.org/10.1080/00664677.2025.2550301",
    abstract: "Critical engagement with ethnographic explorations of youth, mediated nostalgia, and temporal orientation in digital capitalism.",
    bibtex: `@article{dev2025young,
  author = {Dev, Neerej and Joy, Silpa},
  title = {Review of Young People, Media, and Nostalgia: An Ethnography of How Youth Imagine Their Lives},
  journal = {Anthropological Forum},
  year = {2025},
  doi = {10.1080/00664677.2025.2550301}
}`
  },
  {
    id: "joy2024queer",
    title: "Review of Queer Reflections on AI: Uncertain Intelligences (Klipphahn-Karge et al., eds.)",
    authors: "Silpa Joy and Neerej Dev",
    year: "2024",
    venue: "Journal of Homosexuality, 72(1)",
    type: "review",
    pdf: "files/Queer-Reflections-on-AI-Review-2024.pdf",
    doi: "10.1080/00918369.2024.2310178",
    url: "https://doi.org/10.1080/00918369.2024.2310178",
    abstract: "Examines critical queer interventions into machine learning, algorithmic bias, and the normative ontological foundations of artificial intelligence.",
    bibtex: `@article{joy2024queer,
  author = {Joy, Silpa and Dev, Neerej},
  title = {Review of Queer Reflections on AI: Uncertain Intelligences},
  journal = {Journal of Homosexuality},
  volume = {72},
  number = {1},
  year = {2024},
  doi = {10.1080/00918369.2024.2310178}
}`
  },
  {
    id: "dev2026reparative",
    title: "Book Review: The Reparative Impulse of Queer Young Adult Literature (Angel Daniel Matos)",
    authors: "Neerej Dev",
    year: "2026",
    venue: "International Journal of LGBTQ+ Youth Studies",
    type: "review",
    pdf: "",
    doi: "10.1080/29968992.2026.2742165",
    url: "https://doi.org/10.1080/29968992.2026.2742165",
    abstract: "Review addressing affective reading, reparative hermeneutics, and queer futurity in contemporary YA literature.",
    bibtex: `@article{dev2026reparative,
  author = {Dev, Neerej},
  title = {Book Review: The Reparative Impulse of Queer Young Adult Literature},
  journal = {International Journal of LGBTQ+ Youth Studies},
  year = {2026},
  doi = {10.1080/29968992.2026.2742165}
}`
  },
  {
    id: "dev2023class",
    title: "Homosexuality as a Dominant Narrative in ‘Class’",
    authors: "Neerej Dev and Namitha Dev",
    year: "2023",
    venue: "Economic and Political Weekly, 58(19)",
    type: "journal",
    pdf: "files/Homosexuality-as-a-Dominant-Narrative-in-Class-EPW-2023.pdf",
    url: "https://www.epw.in/",
    abstract: "Interrogates the intersection of queer desire, class politics, and social caste hierarchies in contemporary serialized Indian streaming media.",
    bibtex: `@article{dev2023homosexuality,
  author = {Dev, Neerej and Dev, Namitha},
  title = {Homosexuality as a Dominant Narrative in ‘Class’},
  journal = {Economic and Political Weekly},
  volume = {58},
  number = {19},
  year = {2023}
}`
  },
  {
    id: "dev2023aiart",
    title: "Artificial Intelligence and Art",
    authors: "Neerej Dev and P. C. Vipula",
    year: "2023",
    venue: "Economic and Political Weekly, 58(8)",
    type: "journal",
    pdf: "files/Artificial-Intelligence-and-Art-EPW-2023.pdf",
    url: "https://www.epw.in/",
    abstract: "Theoretical interrogation of authorship, mechanical reproduction, and the political economy of generative image synthesis in artistic production.",
    bibtex: `@article{dev2023artificial,
  author = {Dev, Neerej and Vipula, P. C.},
  title = {Artificial Intelligence and Art},
  journal = {Economic and Political Weekly},
  volume = {58},
  number = {8},
  year = {2023}
}`
  },
  {
    id: "dev2022prbook",
    title: "Understanding Public Relations",
    authors: "Neerej Dev",
    year: "2022",
    venue: "Eureka Publications (ISBN: 978-93-91260-69-9)",
    type: "book",
    pdf: "",
    url: "https://scholar.google.com/citations?user=PYp7N-kAAAAJ&hl=en",
    abstract: "Comprehensive academic monograph covering foundational PR theory, strategic communications, media relations, and digital reputation ethics.",
    bibtex: `@book{dev2022understanding,
  author = {Dev, Neerej},
  title = {Understanding Public Relations},
  publisher = {Eureka Publications},
  year = {2022},
  isbn = {978-93-91260-69-9}
}`
  },
  {
    id: "dev2020ict",
    title: "Effectiveness of ICT to Transform Teaching Experience: A Survey Study Among School Teachers in Kerala",
    authors: "Neerej Dev and A. P. Kumar",
    year: "2020",
    venue: "ICSAH Proceedings",
    type: "proceedings",
    pdf: "files/Effectiveness-of-ICT-to-Transform-Teaching-Experience-2020.pdf",
    url: "https://scholar.google.com/citations?user=PYp7N-kAAAAJ&hl=en",
    abstract: "Empirical survey exploring technological pedagogical integration and infrastructural constraints among primary and secondary educators in Kerala.",
    bibtex: `@inproceedings{dev2020effectiveness,
  author = {Dev, Neerej and Kumar, A. P.},
  title = {Effectiveness of ICT to Transform Teaching Experience: A Survey Study Among School Teachers in Kerala},
  booktitle = {ICSAH Proceedings},
  year = {2020}
}`
  }
];

// 1. THEME SWITCHER
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('nd_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('nd_theme', newTheme);
    });
  }
}

// 2. MOBILE MENU
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      menuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking a nav item
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

// 3. TOAST NOTIFICATION
function showToast(message) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// 4. BIBTEX MODAL & COPY
function initBibTeX() {
  const modal = document.getElementById('bibtex-modal');
  const codeElem = document.getElementById('bibtex-code-content');
  const copyBtn = document.getElementById('bibtex-copy-btn');
  const closeBtn = document.getElementById('bibtex-modal-close');

  window.openBibtexModal = function(pubId) {
    const pub = publicationsData.find(p => p.id === pubId);
    if (!pub || !modal || !codeElem) return;
    codeElem.textContent = pub.bibtex;
    modal.classList.add('active');
  };

  window.copyBibtexDirect = function(pubId) {
    const pub = publicationsData.find(p => p.id === pubId);
    if (!pub) return;
    navigator.clipboard.writeText(pub.bibtex).then(() => {
      showToast('BibTeX citation copied to clipboard!');
    }).catch(err => {
      console.error('Copy failed:', err);
    });
  };

  if (copyBtn && codeElem) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(codeElem.textContent).then(() => {
        showToast('BibTeX copied to clipboard!');
      });
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

// 5. COLLAPSIBLE ABSTRACTS
window.toggleAbstract = function(id) {
  const elem = document.getElementById(`abstract-${id}`);
  if (elem) {
    elem.classList.toggle('open');
  }
};

// 6. CONTENT FILTERING (PUBLICATIONS & WRITING)
function initPublicationFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const pubCards = document.querySelectorAll('.pub-card');
  const writingEntries = document.querySelectorAll('.writing-entry');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      if (pubCards.length > 0) {
        pubCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-type') === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      }

      if (writingEntries.length > 0) {
        writingEntries.forEach(entry => {
          if (filter === 'all' || entry.getAttribute('data-category') === filter) {
            entry.style.display = entry.classList.contains('featured-editorial') ? 'block' : 'flex';
          } else {
            entry.style.display = 'none';
          }
        });
      }
    });
  });
}

// 7. INSTANT LIVE SEARCH (CMD+K / SEARCH BUTTON)
function initLiveSearch() {
  const searchModal = document.getElementById('search-modal');
  const searchToggle = document.getElementById('search-toggle');
  const searchClose = document.getElementById('search-modal-close');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  function openSearch() {
    if (!searchModal) return;
    searchModal.classList.add('active');
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
      renderSearchResults('');
    }
  }

  function closeSearch() {
    if (searchModal) searchModal.classList.remove('active');
  }

  if (searchToggle) searchToggle.addEventListener('click', openSearch);
  if (searchClose) searchClose.addEventListener('click', closeSearch);

  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearch();
    });
  }

  // Keyboard shortcut: Cmd+K or Ctrl+K or Escape
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape') {
      closeSearch();
      const bibModal = document.getElementById('bibtex-modal');
      if (bibModal) bibModal.classList.remove('active');
    }
  });

  function renderSearchResults(query) {
    if (!searchResults) return;
    const q = query.trim().toLowerCase();
    
    if (!q) {
      searchResults.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 2rem 1rem;">
          Type keywords to search publications, awards, presentations, and essays...
        </div>
      `;
      return;
    }

    const matches = publicationsData.filter(p => {
      return p.title.toLowerCase().includes(q) ||
             p.venue.toLowerCase().includes(q) ||
             p.abstract.toLowerCase().includes(q) ||
             p.year.toLowerCase().includes(q);
    });

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 2rem 1rem;">
          No publications found matching "<strong>${query}</strong>"
        </div>
      `;
      return;
    }

    searchResults.innerHTML = matches.map(p => `
      <div class="search-item" onclick="handleSearchSelect('${p.id}')">
        <div class="search-item-title">${p.title}</div>
        <div class="search-item-meta">${p.venue} (${p.year})</div>
      </div>
    `).join('');
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }

  window.handleSearchSelect = function(pubId) {
    closeSearch();
    const elem = document.getElementById(`pub-${pubId}`);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      elem.style.outline = '2px solid var(--accent-primary)';
      setTimeout(() => { elem.style.outline = 'none'; }, 2000);
    } else {
      window.location.href = `publications.html#pub-${pubId}`;
    }
  };
}

// Initialize everything on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initBibTeX();
  initPublicationFilters();
  initLiveSearch();
});
