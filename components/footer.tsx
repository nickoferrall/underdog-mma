import { Facebook, Instagram, Twitter, Youtube, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/50 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Underdog MMA</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Premier martial arts training in West Hartford, Connecticut. Expert instruction in MMA, BJJ, Muay Thai, and more for all skill levels.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/underdogmmact/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/underdogmmact/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.google.com/maps/search/Underdog+MMA+West+Hartford+CT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4 tracking-tight">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <a href="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="/reviews" className="text-muted-foreground hover:text-primary transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4 tracking-tight">CONTACT INFO</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>23 Andover Drive</li>
              <li>West Hartford, CT 06110</li>
              <li>
                <a href="tel:8606161365" className="hover:text-primary transition-colors">
                  (860) 616-1365
                </a>
              </li>
              <li>
                <a href="mailto:info@underdogmma.com" className="hover:text-primary transition-colors">
                  info@underdogmma.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4 tracking-tight">HOURS</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>9:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground/80">
          <p>&copy; {new Date().getFullYear()} Underdog MMA. All rights reserved.</p>
          <p className="mt-2">
            Powered by{" "}
            <a
              href="https://fitlo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors"
            >
              Fitlo
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
