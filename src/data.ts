/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Facility, MemberTransformation, PricingPlan, Testimonial, FAQItem } from './types';

export const BUSINESS_INFO = {
  name: "Tranceform Fitness",
  subtitle: "ट्रान्सफॉर्म फिटनेस – बेस्ट जिम इन धनकवडी",
  address: "Plot No 11,12 Pushkaraj Society, Behind Bharati Vidyapeeth, Opp RamaKrishna Hostel, Dhankawadi, Chandrabhaga Nagar Road, Mohan Nagar, Dhankawadi, Pune, Maharashtra 411043",
  phone: "07219261729",
  phoneFormatted: "+91 72192 61729",
  whatsapp: "+917219261729",
  whatsappMessage: "Hello Tranceform Fitness, I would like to know more about your gym memberships and join standard program.",
  email: "tranceformfitness@gmail.com",
  timings: {
    weekdays: "05:30 AM – 10:00 PM",
    saturday: "05:30 AM – 10:00 PM",
    sunday: "07:00 AM – 12:00 PM",
  },
  gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.821731652758!2d73.8504!3d18.4463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac27dbf0fdf%3A0xc6cb1c496e5117ee!2sTranceform%20Fitness!5e0!3m2!1sen!2sin!4v1703134567890!5m2!1sen!2sin",
  gmapDirUrl: "https://maps.google.com/?q=Tranceform+Fitness+Dhankawadi+Pune"
};

export const SERVICES: Service[] = [
  {
    id: "wt-loss",
    title: "Weight Loss Transformation",
    description: "Personalized science-backed fat loss strategies combining high-intensity interval training, strength adaptation, and targeted structural nutrition planning.",
    iconName: "TrendingDown"
  },
  {
    id: "musc-build",
    title: "Muscle Building Programs",
    description: "Hypertrophy focused training regimens, progressive overload frameworks, and specific macronutrient strategies designed to acquire lean muscular mass.",
    iconName: "Flame"
  },
  {
    id: "strength-tr",
    title: "Strength Training",
    description: "Develop unmatched physical foundation, robust core power, and functional resilience using elite free weights, barbells, and compound lifts.",
    iconName: "Dumbbell"
  },
  {
    id: "cardio-cond",
    title: "Cardio Conditioning",
    description: "State-of-the-art endurance running decks, rowers, and step mills combined with optimized pacing mechanics to boost structural VO2 max.",
    iconName: "Heart"
  },
  {
    id: "pers-training",
    title: "Personal Training",
    description: "Get undivided 1-on-1 mentorship with elite certified coaches directing each rep, customizing weekly recovery, and ensuring lightning-fast results.",
    iconName: "UserCheck"
  },
  {
    id: "func-fitness",
    title: "Functional Fitness",
    description: "Enhance athletic performance, agility, core stability, and structural mobility with dynamic three-dimensional movement pattern systems.",
    iconName: "Activity"
  },
  {
    id: "fit-assess",
    title: "Fitness Assessment",
    description: "Comprehensive scientific body profile analytics, muscular bio-impedance testing, posture scanning, and metric tracking reports.",
    iconName: "ClipboardCheck"
  },
  {
    id: "unisex-member",
    title: "Unisex Gym Membership",
    description: "Flexible access schedules, supportive training environment, and separate modern locker facilities optimized for both men and women.",
    iconName: "Users"
  }
];

export const HIGHLIGHTS = [
  "Certified Trainers",
  "Personalized Programs",
  "Hygienic Environment",
  "Affordable Memberships",
  "Premium Equipment",
  "Focus On Results"
];

export const TRUST_STRIP = [
  "✓ Certified Trainers",
  "✓ Premium Equipment",
  "✓ Personalized Attention",
  "✓ Friendly Community",
  "✓ Hygienic Environment",
  "✓ Affordable Memberships"
];

export const FACILITIES: Facility[] = [
  {
    id: "f1",
    title: "Imported Gym Equipment",
    description: "Elite level biomechanically aligned machinery and commercial-grade free weights designed for isolation and maximum activation.",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f2",
    title: "Dedicated Cardio Zone",
    description: "Rows of premium high-performance treadmills, elliptical decathletes, spin units, and step mills with premium sensory panels.",
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7db0cb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f3",
    title: "Strength Training Area",
    description: "Massive platform decks, rugged multi-station cages, heavy dumbbells, bumper plates, and pristine high-performance barbells.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f4",
    title: "Functional Fitness Area",
    description: "Vibrant turf grass track, battle rope anchors, plyometric timber boxes, medicine balls, and professional agility grids.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f5",
    title: "Spacious Workout Floor",
    description: "Premium rubberized shock-absorbent flooring, architectural high ceilings, and sprawling spacing to lift with zero clutter.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f6",
    title: "Locker & Shower Facility",
    description: "Highly secure biometric keyless storage vaults, clean modern changing enclosures, and premium refresh zones.",
    image: "https://images.unsplash.com/photo-1620136224435-be2a1f43eb1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f7",
    title: "Air Conditioned Facility",
    description: "Continuous micro-climate temperature automation and active clean air ventilation for consistent fresh performance oxygen.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f8",
    title: "Flexible Memberships",
    description: "Custom monthly, quarterly, half-yearly, and yearly packages to match your schedule and lifestyle commitment levels.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800"
  }
];

export const TRANSFORMATIONS: MemberTransformation[] = [
  {
    id: "t1",
    name: "Amit Ranade",
    age: 28,
    goal: "Severe Weight Loss & Core Rebuilding",
    duration: "6 Months",
    beforeWeight: "94 kg",
    afterWeight: "72 kg",
    beforeBodyFat: "32%",
    afterBodyFat: "14%",
    imageUrlBefore: "https://images.unsplash.com/photo-1583454122499-21a2249550e5?auto=format&fit=crop&q=80&w=400",
    imageUrlAfter: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400",
    story: "Amit lost 22kg of stubborn body fat while dramatically packing on functional muscle. His entire lifestyle changed, reporting immense mental focus and peak strength on compound squats."
  },
  {
    id: "t2",
    name: "Pooja Shinde",
    age: 25,
    goal: "Body Recomposition & Lean Toning",
    duration: "4 Months",
    beforeWeight: "68 kg",
    afterWeight: "57 kg",
    beforeBodyFat: "29%",
    afterBodyFat: "18%",
    imageUrlBefore: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400",
    imageUrlAfter: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=400",
    story: "Pooja combined our customized high-intensity strength programs with a caloric-deficit diet. She carved an spectacular aesthetic shape, completely tone her physique, and gained incredible athletic grit."
  },
  {
    id: "t3",
    name: "Rahul Deshmukh",
    age: 32,
    goal: "Lean Muscle Gain & Posture Alignment",
    duration: "5 Months",
    beforeWeight: "61 kg",
    afterWeight: "75 kg",
    beforeBodyFat: "10%",
    afterBodyFat: "11%",
    imageUrlBefore: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    imageUrlAfter: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    story: "Rahul gained 14kg of pure lean muscle tissue under direct guidance. Focus was placed on heavy barbell training, structural hypertrophy mechanics, and high-protein diet optimization."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "p1",
    name: "BASIC PLAN",
    price: 999,
    billingPeriod: "month",
    features: [
      "Access to premium Gym floor",
      "Full locker facility access",
      "Standard cardio floor access",
      "Certified trainers support",
      "Clean, climate-controlled setup"
    ],
    isPopular: false
  },
  {
    id: "p2",
    name: "STANDARD PLAN",
    price: 1499,
    billingPeriod: "month",
    features: [
      "Everything in Basic Plan",
      "Surgically customized workout design",
      "Structured dietitian diet advice",
      "Monthly body metrics assessment",
      "Access to functional high-intensity zone",
      "Direct trainers priority assistance"
    ],
    isPopular: true
  },
  {
    id: "p3",
    name: "PREMIUM PLAN",
    price: 1999,
    billingPeriod: "month",
    features: [
      "Everything in Standard Plan",
      "Personal Training (PT) direct support slots",
      "Elite metabolic priority trackers",
      "Custom premium advanced supplementation advice",
      "Extended group fitness masterclasses",
      "24/7 dedicated digital coach chatline"
    ],
    isPopular: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "r1",
    name: "Vikram Kadam",
    role: "Working Professional",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    review: "Tranceform Fitness has been the best choice I've made in Pune. It's not just a gym; it's a family. The staff are incredible and they keep the equipment at an immaculate, premium standard.",
    tag: "Working Professional"
  },
  {
    id: "r2",
    name: "Anjali Joshi",
    role: "College Student (Bharati Vidyapeeth)",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    review: "Being a student nearby, it's the safest, most encouraging unisex gym environment in Dhankawadi. I joined their weight loss program and lost 8kg in 2 months under expert guidance. Love it!",
    tag: "Student"
  },
  {
    id: "r3",
    name: "Snehal Patil",
    role: "IT Consultant",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    review: "Incredible personal trainers! They designed a diet that aligns with my busy shift times and guided my deadlift form flawlessly. Super hygienic workout flooring and fresh air.",
    tag: "Female Member"
  },
  {
    id: "r4",
    name: "Karan Johar",
    role: "Digital Marketer",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    review: "The muscle building program here is unmatched. It follows progressive overload strictly with premium imported machinery. The energy in the evening is simply ecstatic!",
    tag: "Muscle Gain"
  },
  {
    id: "r5",
    name: "Shraddha Gokhale",
    role: "Primary School Teacher",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    review: "Highly professional. Standardized coaching packages that actually deliver on weight loss. Cleanliness is highly prioritized, and women feel extremely comfortable here.",
    tag: "Weight Loss"
  },
  {
    id: "r6",
    name: "Dinkar Rao",
    role: "Retired Executive (63 years)",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    review: "At 63, I was hesitant to join a gym. But Tranceform Fitness team handles seniors with ultimate patient and science. My chronic knee pain has gone down significantly due to targeted functional muscle building.",
    tag: "Senior Fitness"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What are your gym timings?",
    answer: "We are open from 05:30 AM to 10:00 PM from Monday to Saturday to accommodate early birds and late professionals. On Sundays, we are active from 07:00 AM to 12:00 PM."
  },
  {
    question: "Do you offer personal training?",
    answer: "Yes! We host an elite group of certified personal trainers who customize high-performance results programs, track your detailed analytics, direct nutrition intake, and guide your form on every rep."
  },
  {
    question: "Is Tranceform Fitness suitable for beginners?",
    answer: "Absolutely! Over 60% of our members started as complete beginners. Our certified floor coaches offer free foundational orientation, showing you how to operate every machine safely and effectively."
  },
  {
    question: "Do you provide weight loss programs?",
    answer: "Yes, weight loss transformation is one of our key specialties. We create holistic systems pairing localized metabolic conditioning workouts, high-intensity functional cardio, and customized nutrition guidance."
  },
  {
    question: "Is this a unisex gym?",
    answer: "Yes, Tranceform Fitness is a premier unisex fitness destination designed to be exceptionally welcoming, safe, and motivating for both men and women. We maintain high standards of discipline and safety."
  },
  {
    question: "How can I join?",
    answer: "You can book a free consultation using our website form, drop us a line on WhatsApp directly (+917219261729), or call us at 07219261729. Better yet, secure your slot and walk in for a warm tour of our premium facility!"
  },
  {
    question: "Do you offer monthly memberships?",
    answer: "Yes! Our premium plans start with highly affordable monthly options (Basic Plan at ₹999/month, Standard at ₹1499/month, and Premium at ₹1999/month). We also offer discounted quarterly, half-yearly, and yearly packages."
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    tag: "Gym Interior",
    title: "Main Strength Floor",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "g2",
    tag: "Cardio Area",
    title: "Cardio Conditioning Lineup",
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7db0cb?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "g3",
    tag: "Strength Area",
    title: "Heavy Bench and Barbells Platforms",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "g4",
    tag: "Trainers",
    title: "Personal Mentorship Session",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "g5",
    tag: "Group Workouts",
    title: "HIIT & Functional Turf Circuit",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "g6",
    tag: "Transformations",
    title: "Athletic Body Sculpting Results",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=1200"
  }
];
