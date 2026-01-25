// config.js - Zentrale Konfiguration 2026
const SUPABASE_URL = "https://pgcjsyzoukyynkufupms.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnY2pzeXpvdWt5eW5rdWZ1cG1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1ODczNDYsImV4cCI6MjA4NDE2MzM0Nn0.OMWHNFp7Blnm2GKaZ8I4d8-Y76tEztRiO2Ewr7BlCvA";

// Initialisierung
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Hilfsfunktion für die Navigation (Markiert den aktuellen Link als aktiv)
function setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop() || "admin.html";
    document.querySelectorAll('.nav-link').forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    lucide.createIcons();
}

// Initialisierung beim Laden
document.addEventListener('DOMContentLoaded', setActiveLink);
