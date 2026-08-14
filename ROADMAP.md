# Production readiness roadmap

The production origin is `https://www.hillaryfayedesign.com`. Each sprint has a narrow scope and a validation gate so it can be reviewed before the next sprint begins.

## Sprint 1 — Domain and indexability foundation

Status: Ready for validation

Goal: Make every generated URL and GitHub Pages artifact correct for the production domain before DNS is pointed at the new site.

- Set Astro's production origin to `https://www.hillaryfayedesign.com` and remove the repository-path base URL.
- Add the GitHub Pages `CNAME` artifact.
- Update `robots.txt` and the sitemap to the production origin.
- Confirm canonical, Open Graph, asset, internal-link, sitemap, and robots URLs in the production build.
- Record the external GitHub Pages and DNS cutover checklist.

Validation gate:

- The production build completes with no diagnostics.
- Generated pages contain `www.hillaryfayedesign.com` canonicals and root-relative site assets.
- No generated file refers to `samwolcott.github.io` or `/hillary-faye-design`.
- GitHub Pages shows `www.hillaryfayedesign.com` as the custom domain and reports DNS check successful before enforcing HTTPS.

External cutover checklist:

1. In the repository's Pages settings, keep the source set to GitHub Actions and set the custom domain to `www.hillaryfayedesign.com`.
2. At the DNS provider, point the `www` CNAME to `samwolcott.github.io`.
3. Configure the apex `hillaryfayedesign.com` using GitHub's documented apex-domain records, or forward it permanently to `https://www.hillaryfayedesign.com` at the DNS/hosting provider.
4. Do not remove the old site's records until the GitHub Pages deployment is healthy on the custom hostname.
5. After GitHub's certificate is issued, enable Enforce HTTPS.
6. Verify both apex and `www`, the booking flow, and the main legacy URLs in a private browser window.

## Sprint 2 — Search identity and share previews

Status: Not started

Goal: Give search engines and social platforms complete, consistent business and page metadata.

- Add `HairSalon`/`LocalBusiness` JSON-LD with accurate address, phone, hours, email, social profiles, and canonical URL.
- Add `og:url`, `og:site_name`, image dimensions and alt text, and Twitter card metadata.
- Add page-level control for robots metadata and mark the 404 page `noindex`.
- Replace the hand-maintained sitemap with generated output.
- Refine page titles and descriptions for Sumner-area search intent without keyword stuffing.

Validation gate:

- Structured data passes Google's Rich Results Test without errors.
- Every indexable page has one unique title, description, canonical URL, and H1.
- Social previews render correctly in representative preview tools.
- The 404 response and indexing behavior are confirmed on GitHub Pages.

## Sprint 3 — Image and delivery performance

Status: Not started

Goal: Reduce image transfer and layout movement while preserving the site's visual quality.

- Generate responsive gallery thumbnail and lightbox variants.
- Add `srcset`, `sizes`, intrinsic dimensions, and appropriate loading priority to content images.
- Verify that the hero remains the only high-priority image on the homepage.
- Simplify the oversized favicon and add useful icon fallbacks.
- Improve font delivery through self-hosting or direct stylesheet loading with connection hints.

Validation gate:

- Test representative mobile and desktop pages with Lighthouse/PageSpeed after deployment.
- Confirm no visible image layout shift and no broken responsive candidates.
- Confirm that gallery image transfer is materially lower on a mobile viewport.

## Sprint 4 — Booking resilience and accessibility

Status: Not started

Goal: Make the primary conversion path reliable for every device and robust when third-party scripts fail.

- Give every booking call-to-action a real booking destination as a fallback.
- Review whether Boulevard can load on interaction or idle without degrading the experience.
- Improve mobile navigation focus, Escape, outside-click, and state behavior.
- Add lightbox announcements and test full keyboard and screen-reader interaction.
- Audit contrast, focus visibility, touch targets, 200% zoom, and reduced motion.

Validation gate:

- Booking works on iOS Safari, Android Chrome, desktop Safari, and desktop Chrome.
- Booking still has a usable fallback when the Boulevard script is blocked.
- Keyboard-only and automated accessibility checks find no critical issues.

## Sprint 5 — Local content and conversion confidence

Status: Not started

Goal: Answer prospective guests' questions and strengthen relevant local search coverage.

- Add useful descriptions and booking guidance to major service groups.
- Add a clear location/visit section with parking, arrival, accessibility, and service-area information that the owner verifies.
- Improve gallery alt text only where looks and techniques can be accurately identified.
- Review policy language, booking fees, deposits, hours, contact details, and staff availability for consistency.

Validation gate:

- The owner verifies all service, location, policy, and team claims.
- Important pages contain helpful original content and clear next actions.
- Business name, address, phone, hours, and links match the Google Business Profile.

## Sprint 6 — Measurement, launch, and post-launch checks

Status: Not started

Goal: Publish with enough measurement and monitoring to detect problems quickly.

- Add a privacy-appropriate analytics setup approved by the owner.
- Track booking opens, booking completions where supported, phone, email, directions, and key service-page actions.
- Connect Google Search Console and Bing Webmaster Tools and submit the sitemap.
- Validate legacy URLs, HTTPS, redirects, canonicals, structured data, and crawlability after DNS propagation.
- Capture launch performance baselines and review indexing and conversion data after launch.

Validation gate:

- Production smoke tests pass on the custom domain.
- Search Console accepts the sitemap and key URLs are inspectable.
- Measurement events are verified without collecting unnecessary personal data.
- A post-launch review is scheduled for roughly 7 and 30 days after publication.
