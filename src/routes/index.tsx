import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  X,
  Menu,
  ShoppingCart,
  Zap,
  FileDown,
  Users,
  Quote,
  Star,
  Tag,
  Timer,
  SquareCheck,
  ChevronDown,
  Package,
  Heart,
} from "lucide-react";
import { ProductGallery } from "@/components/ProductGallery";
import logo from "@/assets/logo.png.asset.json";
import av1 from "@/assets/av1.jpg.asset.json";
import av2 from "@/assets/av2.jpg.asset.json";
import av3 from "@/assets/av3.jpg.asset.json";
import av4 from "@/assets/av4.jpg.asset.json";
import av5 from "@/assets/av5.jpg.asset.json";
import av6 from "@/assets/av6.jpg.asset.json";
import kid1 from "@/assets/kid1.webp.asset.json";
import kid2 from "@/assets/kid2.webp.asset.json";
import kid3 from "@/assets/kid3.webp.asset.json";
import inside from "@/assets/inside3.png.asset.json";
import offer from "@/assets/offer3.png.asset.json";

const bandAvatars = [av1.url, av2.url, av3.url, av4.url, av5.url];

const purchaseNotifications = [
  { name: "Élodie T.", time: "il y a 2 min" },
  { name: "Chloé B.", time: "il y a 5 min" },
  { name: "Inès M.", time: "il y a 7 min" },
  { name: "Clara D.", time: "il y a 9 min" },
  { name: "Mathilde G.", time: "il y a 12 min" },
];

function PurchaseNotification() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % purchaseNotifications.length);
        setVisible(true);
      }, 400);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const n = purchaseNotifications[index]!;

  return (
    <div
      data-notification
      className={`fixed right-4 top-24 z-50 flex items-center gap-3 rounded-xl border bg-card p-3 pr-4 shadow-lg transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-soft">
        <Heart className="size-5 fill-primary text-primary" />
      </div>
      <div className="text-xs">
        <p className="font-semibold" data-notification-name>{n.name} vient d'acheter</p>
        <p className="text-muted-foreground" data-notification-meta>le plan à 12,90 € · {n.time}</p>
      </div>
    </div>
  );
}
import gal2 from "@/assets/gal2.png.asset.json";
import gal8 from "@/assets/gal8.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NeuroEnfants™ — +180 activités pour l'attention et la concentration" },
      {
        name: "description",
        content:
          "NeuroEnfants™ Focus System : plus de 180 activités imprimables pour aider votre enfant à se concentrer, apprendre et gagner en confiance en 10 minutes par jour.",
      },
      { property: "og:title", content: "NeuroEnfants™ Focus System — Concentration par le jeu" },
      {
        property: "og:description",
        content:
          "Transformez la distraction en concentration grâce au jeu. Plus de 180 activités simples, 100 % sans écran.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const bullets = [
  ["Aide votre enfant à ", "rester concentré et à terminer ses activités", " au lieu d'abandonner à mi-chemin."],
  ["Réduit la frustration et les luttes quotidiennes, transformant les moments « je n'y arrive pas » en ", "confiance et fierté", "."],
  ["Crée des moments de jeu plus calmes après l'école ou avant le coucher, ", "sans écrans ni disputes", "."],
  ["Idéal pour les enfants facilement distraits, agités ou qui semblent ", "« dans leur monde »", "."],
  ["Développe les compétences réelles qui préoccupent les parents : ", "attention, patience et maîtrise de soi", "."],
  ["Ressemble à un jeu pour votre enfant alors que vous savez qu'il ", "apprend et entraîne sa concentration", "."],
  ["Seulement 10 minutes par jour : une routine simple et réaliste pour les parents qui veulent ", "voir un vrai changement", "."],
];

const imagineList = [
  "Se concentrer plus vite sans écrans, cris ni frustration",
  "Finir ses devoirs sans pleurer ni dire « je n'y arrive pas »",
  "Gérer ses émotions sans crises",
  "Apprendre plus vite et mieux retenir",
  "Développer patience, calme et maîtrise de soi",
  "Jouer tout en stimulant son cerveau (100 % sans écran)",
];

const whyList = [
  "Conçu selon des principes inspirés de Montessori",
  "Stimule les 5 zones clés du cerveau",
  "Exercices courts mais puissants",
  "Progression simple, étape par étape",
  "Parfait pour les enfants actifs ou facilement distraits",
  "100 % sans écran",
  "Des résultats visibles en quelques jours",
];

const compareRows = [
  "Meilleure concentration et calme",
  "Termine les tâches plus vite",
  "Mémoire et compréhension renforcées",
  "Des activités qui les captivent vraiment",
  "Plus de confiance et de motivation",
];

const testimonials = [
  {
    text: "Mon enfant avait du mal à se concentrer… maintenant il demande lui-même à faire ces activités tous les jours. Je ne l'ai jamais vu aussi motivé.",
    name: "Sophie F.",
    photo: kid1.url,
    avatar: av2.url,
  },
  {
    text: "Le meilleur achat que j'ai fait pour mon enfant. Il est passé de la frustration à tout terminer avec le sourire.",
    name: "Léa M.",
    photo: kid2.url,
    avatar: av3.url,
  },
  {
    text: "Je pensais que rien ne fonctionnerait… mais en quelques jours seulement, mon enfant est passé d'une frustration constante au calme, à la concentration et au vrai plaisir d'apprendre !",
    name: "Manon S.",
    photo: kid3.url,
    avatar: av6.url,
  },

];

const includedList = [
  "🟦 Activités de concentration et d'attention",
  "🟩 Activités de renforcement de la mémoire",
  "🟧 Formes et motifs",
  "🟪 Séquences logiques",
  "🟨 Tracé et motricité fine",
  "🟫 Couleurs et associations",
  "⬛ Coordination œil-main",
  "🌀 Activités 100 % sans écran",
  "✨ + TOUS les bonus offerts GRATUITEMENT (aujourd'hui seulement !)",
];

const includedExtras = [
  "Programme numérique (accès immédiat)",
  "Activités étape par étape",
  "Aucun produit physique expédié",
];

const offerIncludes = [
  "Accès immédiat",
  "Plus de 180 activités imprimables",
  "10 ressources bonus",
  "Utilisation à vie",
];

const faqs = [
  {
    q: "Comment vais-je recevoir le produit ?",
    a: "Juste après votre achat, vous recevrez un accès immédiat pour tout télécharger. Pas d'attente, pas de frais de port, vous pouvez commencer dès aujourd'hui.",
  },
  {
    q: "Pour quel âge est-ce adapté ?",
    a: "NeuroEnfants™ convient aux enfants de 3 à 14 ans. Les activités sont progressives, elles s'adaptent donc facilement au niveau de votre enfant.",
  },
  {
    q: "Ai-je besoin d'une expérience d'enseignement ou d'une préparation spéciale ?",
    a: "Pas du tout. Tout est conçu pour être simple, guidé et facile à suivre : n'importe quel parent peut le faire.",
  },
  {
    q: "Et si mon enfant est très actif ou facilement distrait ?",
    a: "Parfait : c'est exactement pour cela qu'il a été créé. NeuroEnfants™ aide les enfants à canaliser cette énergie de manière positive tout en développant leur concentration étape par étape.",
  },
  {
    q: "Combien de temps avant de voir des résultats ?",
    a: "La plupart des parents remarquent des changements en 3 à 7 jours : meilleure concentration, moins de frustration, mémoire améliorée, comportement plus calme. Chaque enfant est différent, mais les résultats arrivent généralement vite.",
  },
  {
    q: "Ai-je besoin d'écrans ou d'internet ?",
    a: "Non. Une fois téléchargé, tout est 100 % imprimable et totalement sans écran.",
  },
  {
    q: "Combien de fois puis-je utiliser les activités ?",
    a: "Autant de fois que vous le souhaitez. Vous bénéficiez d'un accès à vie : vous pouvez réutiliser et réimprimer les activités quand vous voulez.",
  },
  {
    q: "Cela aide-t-il si mon enfant a un TDAH ou des difficultés d'apprentissage ?",
    a: "De nombreux parents d'enfants qui ont du mal à se concentrer rapportent d'excellents résultats, car les activités sont courtes et captivantes, conçues pour améliorer la concentration, la mémoire et la logique, et utiles pour réduire la frustration. (Ce n'est pas un traitement médical, mais un outil de soutien puissant.)",
  },
  {
    q: "Puis-je l'utiliser pour plus d'un enfant ?",
    a: "Oui ! Vous l'achetez une fois et vous pouvez l'utiliser avec tous vos enfants.",
  },
];


function Stars() {
  return (
    <div className="flex justify-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-5 fill-star text-star" />
      ))}
    </div>
  );
}

function Index() {
  const [plan, setPlan] = useState<"focus" | "complete">("complete");
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Notification d'achat */}
      <PurchaseNotification />

      {/* Barre d'annonce */}
      <div className="overflow-hidden bg-primary py-2.5 text-sm font-bold text-primary-foreground sm:text-base">
        <div className="marquee">
          <span className="marquee-track">
            <span className="px-8">50 % DE RÉDUCTION — se termine ce soir à 23h59 (plus que 4 en stock)</span>
            <span className="px-8">50 % DE RÉDUCTION — se termine ce soir à 23h59 (plus que 4 en stock)</span>
            <span className="px-8">50 % DE RÉDUCTION — se termine ce soir à 23h59 (plus que 4 en stock)</span>
          </span>
        </div>
      </div>

      {/* En-tête */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background px-4 py-3">
        <button aria-label="Menu" className="p-1 text-foreground">
          <Menu className="size-7" strokeWidth={1.5} />
        </button>
        <div className="flex items-center">
          <img src={logo.url} alt="NeuroEnfants" className="h-12 w-auto object-contain" />
        </div>

        <button aria-label="Panier" className="p-1 text-foreground">
          <ShoppingCart className="size-7" strokeWidth={1.5} />
        </button>
      </header>

      <main className="mx-auto w-full max-w-2xl px-4 pb-24">
        {/* Galerie produit */}
        <section className="pt-4">
          <ProductGallery />


          <div className="mt-4 flex items-center justify-between gap-3 rounded-full bg-primary px-5 py-3">
            <div className="flex items-center gap-2 text-primary-foreground">
              <Star className="size-5 fill-star text-star" />
              <span className="font-medium">Aimé par plus de 10 500 clients</span>
            </div>
            <div className="flex -space-x-2">
              {bandAvatars.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="size-8 shrink-0 rounded-full border-2 border-primary object-cover"
                />
              ))}
            </div>

          </div>

          <h1 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
            NeuroEnfants™ +180 activités pour booster l'attention, la concentration et
            l'apprentissage
          </h1>
        </section>

        {/* Bénéfices */}
        <section className="mt-8 space-y-5">
          {bullets.map(([a, b, c], i) => (
            <div key={i} className="flex gap-3">
              <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary">
                <Check className="size-3.5 text-primary-foreground" strokeWidth={3} />
              </span>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {a}
                <strong className="font-semibold text-foreground">{b}</strong>
                {c}
              </p>
            </div>
          ))}
        </section>

        {/* Témoignage + prix */}
        <section className="mt-10">
          <div className="rounded-2xl bg-muted p-6">
            <h3 className="text-center text-xl font-semibold">Camille R.</h3>
            <div className="mt-3 flex justify-center">
              <span className="rounded-md bg-primary px-3 py-1 text-sm tracking-widest text-primary-foreground">
                ★★★★★
              </span>
            </div>
            <div className="mt-4 flex items-start gap-4">
              <img
                src={av1.url}
                alt="Camille R."
                className="size-20 shrink-0 rounded-full object-cover"
              />

              <p className="text-lg leading-relaxed text-muted-foreground">
                « NeuroEnfants a été une bénédiction pour mon enfant. Je le vois plus concentré, plus
                confiant et même enthousiaste à l'idée d'apprendre. Je n'aurais jamais imaginé qu'une
                chose si simple puisse faire une telle différence dans nos après-midis. Je le
                recommande du fond du cœur. »
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-baseline gap-3">
            <span className="font-display text-3xl font-bold text-primary">7,90 €</span>
            <span className="text-2xl font-bold text-muted-foreground line-through">23,24 €</span>
          </div>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
            <Tag className="size-4" />
            Économisez 66 %
          </div>

          <p className="mt-6 text-center text-sm tracking-wide">
            L'OFFRE SE TERMINE AUJOURD'HUI / ACCÈS IMMÉDIAT PAR E-MAIL
          </p>

          {/* Offres */}
          <div className="mt-4 space-y-4">
            <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-primary/40 bg-primary-soft/40 p-5">
              <input
                type="radio"
                name="plan"
                value="focus"
                checked={plan === "focus"}
                onChange={() => setPlan("focus")}
                className="size-5 shrink-0 accent-primary"
              />
              <span className="flex-1">
                <span className="block text-lg font-bold">+180 activités NeuroEnfants Focus System</span>
                <span className="block text-muted-foreground">Économisez 15,34 €</span>
              </span>
              <span className="text-right">
                <span className="block text-xl font-bold text-primary">7,90 €</span>
                <span className="block text-muted-foreground line-through">23,24 €</span>
              </span>
            </label>

            <div className="relative">
              <span className="absolute -top-3 right-3 rounded-md bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
                Le plus populaire
              </span>
              <label className="flex cursor-pointer items-center gap-4 rounded-xl border-2 border-primary bg-primary-soft/40 p-5">
                <input
                  type="radio"
                  name="plan"
                  value="complete"
                  checked={plan === "complete"}
                  onChange={() => setPlan("complete")}
                  className="size-5 shrink-0 accent-primary"
                />
                <span className="flex-1">
                  <span className="block text-lg font-bold">
                    +300 activités Focus System + Intelligence Émotionnelle
                  </span>
                  <span className="block text-muted-foreground">Économisez 25,04 €</span>
                </span>
                <span className="text-right">
                  <span className="block text-xl font-bold text-primary">12,90 €</span>
                  <span className="block text-muted-foreground line-through">37,94 €</span>
                </span>
              </label>
            </div>
          </div>

          <button
            type="button"
            data-checkout
            onClick={() => {
              const url =
                plan === "focus"
                  ? "https://pay.hotmart.com/F107521759I?checkoutMode=10"
                  : "https://pay.hotmart.com/R107614911I?checkoutMode=10";
              window.location.href = url;
            }}
            className="mt-8 w-full rounded-xl bg-primary py-5 font-display text-2xl font-bold tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            AJOUTER AU PANIER
          </button>

          <p className="mt-5 whitespace-nowrap text-center text-lg font-semibold text-success">
            Téléchargement immédiat • Imprimez et jouez • Accès à vie
          </p>

          {/* Paiements */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {["AMEX", "Apple Pay", "G Pay", "Maestro", "Mastercard", "PayPal", "Shop", "VISA"].map(
              (m) => (
                <div
                  key={m}
                  className="flex h-10 w-16 items-center justify-center rounded-md border border-border bg-card text-[10px] font-semibold text-muted-foreground"
                >
                  {m}
                </div>
              ),
            )}
          </div>

          {/* Garanties */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { icon: Zap, t: "Accès\nimmédiat" },
              { icon: FileDown, t: "PDF numérique\nimprimable" },
              { icon: Users, t: "Plus de 10 500\nfamilles heureuses" },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="flex flex-col items-center gap-2">
                <span className="flex size-14 items-center justify-center rounded-full bg-primary">
                  <Icon className="size-7 text-primary-foreground" />
                </span>
                <span className="whitespace-pre-line text-sm text-muted-foreground">{t}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <img
              src={gal8.url}
              alt="Tous les bonus offerts gratuitement avec NeuroEnfants™"
              className="w-full rounded-xl object-cover"
              loading="lazy"
            />

            <p className="mt-3 text-center font-display text-xl">
              Avec votre achat, vous recevez <strong>TOUS</strong> ces bonus <strong>GRATUITS</strong> !
            </p>
          </div>
        </section>

        {/* Imaginez */}
        <section className="mt-14 text-center">
          <h2 className="font-display text-3xl leading-tight">
            🧠 Imaginez si votre enfant pouvait obtenir cela en{" "}
            <strong>seulement 10 minutes par jour…</strong>
          </h2>
          <ul className="mt-6 space-y-5 text-lg text-muted-foreground">
            {imagineList.map((t) => (
              <li key={t}>– {t}</li>
            ))}
          </ul>
          <p className="mt-6 text-lg font-bold">
            C'est exactement ce que NeuroEnfants™ fait pour eux.
          </p>
        </section>

        {/* Pourquoi ça marche */}
        <section className="mt-14">
          <img
            src={gal2.url}
            alt="Approuvé par plus de 10 000 familles"
            className="w-full rounded-2xl object-cover"
            loading="lazy"
          />


          <h2 className="mt-10 font-display text-3xl leading-tight">
            Pourquoi <strong>NeuroEnfants™ fonctionne-t-il si vite ?</strong>
          </h2>
          <ul className="mt-6 space-y-4 text-lg text-muted-foreground">
            {whyList.map((t) => (
              <li key={t}>✓ {t}</li>
            ))}
          </ul>
          <p className="mt-6 text-lg font-bold">
            Chaque activité est conçue pour activer des compétences cognitives que l'école n'enseigne
            pas… mais dont votre enfant a vraiment besoin.
          </p>
        </section>

        {/* Comparatif */}
        <section className="mt-14">
          <h2 className="text-center font-display text-3xl leading-tight">
            Avant vs Après NeuroEnfants™
          </h2>
          <div className="mt-6 grid grid-cols-[1.2fr_1fr_1fr] items-end gap-y-0 text-center text-sm font-bold">
            <div />
            <div>
              Avec
              <br />
              NeuroEnfants™
            </div>
            <div>
              Sans
              <br />
              NeuroEnfants™
            </div>
          </div>
          <div className="mt-2 overflow-hidden rounded-2xl border border-border">
            {compareRows.map((row) => (
              <div key={row} className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-border last:border-0">
                <div className="flex min-h-20 items-center py-2 pr-3">
                  <span className="flex min-h-16 w-full items-center rounded-xl bg-primary px-4 py-3 text-base font-medium leading-snug text-primary-foreground">
                    {row}
                  </span>
                </div>

                <div className="flex items-center justify-center bg-card">
                  <Check className="size-7 text-primary" strokeWidth={2.5} />
                </div>
                <div className="flex items-center justify-center bg-card">
                  <X className="size-7 text-foreground" strokeWidth={3} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Témoignages */}
        <section className="mt-14">
          <h2 className="text-center font-display text-3xl leading-tight">
            Ce que disent les autres parents :
          </h2>
          <div className="mt-6 space-y-8">
            {testimonials.map((t) => (
              <figure key={t.name} className="overflow-hidden rounded-2xl border border-border">
                <div className="relative">
                  <img
                    src={t.photo}
                    alt={`Enfant utilisant NeuroEnfants™ — avis de ${t.name}`}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <span className="absolute -bottom-6 right-5 flex size-14 items-center justify-center rounded-full bg-primary">
                    <Quote className="size-6 fill-primary-foreground text-primary-foreground" />
                  </span>
                </div>
                <figcaption className="bg-muted px-6 pb-6 pt-8 text-center">
                  <Stars />
                  <p className="mt-4 text-lg text-muted-foreground">{t.text}</p>
                  <div className="mt-5 flex items-center justify-center gap-3 border-t border-border pt-4">
                    <img src={t.avatar} alt={t.name} className="size-9 rounded-full object-cover" />

                    <span className="font-semibold italic">{t.name}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
        {/* Ce qu'il y a à l'intérieur */}
        <section className="mt-14">
          <img src={inside.url} alt="Aperçu du contenu NeuroEnfants™" className="aspect-square w-full rounded-2xl object-cover" />
          <h2 className="mt-10 font-display text-3xl leading-tight">
            Tout ce que votre enfant reçoit avec <strong>NeuroEnfants™</strong>
          </h2>
          <p className="mt-5 text-xl font-bold">Plus de 180 activités incluses :</p>
          <ul className="mt-5 space-y-4 text-lg text-muted-foreground">
            {includedList.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <ul className="mt-6 space-y-4 text-lg text-muted-foreground">
            {includedExtras.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        {/* Offre spéciale */}
        <section className="mt-14">
          <div className="relative">
            <img src={offer.url} alt="Offre à durée limitée NeuroEnfants™" className="w-full rounded-2xl" />
          </div>

          <h2 className="mt-8 font-display text-3xl leading-tight">
            🎁 <strong>Offre spéciale</strong> – aujourd'hui seulement
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Obtenez NeuroEnfants™ + 10 bonus GRATUITS avant que le prix ne remonte.
          </p>
          <p className="mt-5 text-lg text-muted-foreground">Comprend :</p>
          <ul className="mt-4 space-y-4 text-lg text-muted-foreground">
            {offerIncludes.map((t) => (
              <li key={t}>✓ {t}</li>
            ))}
          </ul>
          <p className="mt-6 text-lg font-bold">
            Le cerveau de votre enfant se développe à chaque seconde… chaque jour compte.
          </p>
        </section>

        {/* Pourquoi choisir */}
        <section className="mt-14 text-center">
          <h2 className="font-display text-3xl leading-tight">POURQUOI CHOISIR NEUROENFANTS™</h2>
          <div className="mt-8 space-y-10">
            {[
              {
                icon: Star,
                t: "Des résultats visibles en quelques semaines",
                s: "Améliore la concentration et l'attention",
              },
              {
                icon: Zap,
                t: "Boost de mémoire",
                s: "Des activités qui renforcent la rétention et la compréhension",
              },
              {
                icon: Timer,
                t: "Économisez temps et argent",
                s: "Des activités imprimables utilisables partout !",
              },
              {
                icon: SquareCheck,
                t: "Simple et efficace",
                s: "Seulement 10 minutes par jour",
              },
            ].map(({ icon: Icon, t, s }) => (
              <div key={t} className="flex flex-col items-center gap-3">
                <Icon className="size-16 text-primary" strokeWidth={1.5} />
                <h3 className="text-xl">{t}</h3>
                <p className="text-muted-foreground">{s}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-center font-display text-2xl">Questions fréquentes</h2>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium">
                  {f.q}
                  <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Garantie */}
        <section className="mt-14 text-center">
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Package, t: "Accès immédiat !" },
              { icon: Heart, t: "Aimé par plus de 10 000 parents" },
              { icon: Star, t: "Garantie 100 % sans risque" },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="flex flex-col items-center gap-2">
                <Icon className="size-8 text-primary" strokeWidth={1.5} />
                <span className="text-xs text-muted-foreground">{t}</span>
              </div>
            ))}
          </div>
          <h2 className="mt-10 font-display text-2xl font-bold">
            Garantie 100 % tranquillité d'esprit
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Essayez NeuroEnfants™ pendant 7 jours.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Si vous ne voyez pas de différence, nous vous remboursons.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Aucun risque. Aucune question posée.
          </p>
        </section>
      </main>

    </div>
  );
}
