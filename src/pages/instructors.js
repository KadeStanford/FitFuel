import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Instructors.module.css';

const instructorsData = [
  {
    name: 'Coach Sarah',
    expertise: 'HIIT, Circuit Training, Tabata Training, Bootcamp',
    qualifications: 'Certified Personal Trainer with 10+ years of experience',
    bio:
      'Coach Sarah is a high-energy and motivating fitness coach with a passion for helping clients achieve their fitness goals. With a specialization in HIIT and circuit training, she creates dynamic and challenging workouts that push individuals to their limits. Her positive and supportive approach makes her classes fun and empowering.',
    image: '/images/sarah.jpg',
  },
  {
    name: 'Instructor Lisa',
    expertise: 'Power Yoga, Vinyasa Yoga, Hatha Yoga, Yin Yoga',
    qualifications: 'Registered Yoga Teacher (RYT-200), Yoga Alliance Certified',
    bio:
      "Lisa is a dedicated yoga instructor who brings a balance of strength and tranquility to her classes. Her passion for yoga shines through in her teachings, guiding students through powerful vinyasa flows or grounding them in restorative yin yoga practices. Lisa's focus on breath, alignment, and mindfulness creates a nurturing and transformative experience on the mat.",
    image: '/images/linda.jpg',
  },
  {
    name: 'Coach Mark',
    expertise: 'Strength Training, Core Conditioning, Total Body Sculpt, Resistance Band Workout',
    qualifications: 'Certified Strength and Conditioning Specialist (CSCS), Bachelor\'s Degree in Exercise Science',
    bio:
      'Coach Mark is a results-driven strength and conditioning coach with a deep understanding of human anatomy and exercise physiology. He designs well-rounded workouts that target all major muscle groups, emphasizing proper form and technique. With his guidance, clients build strength, improve functional fitness, and achieve their desired body composition.',
    image: '/images/mark.jpg',
  },
  {
    name: 'Instructor Emma',
    expertise: 'Dance Fitness, Zumba, Kickboxing, Cardio Kickboxing',
    qualifications: 'Certified Group Fitness Instructor, Dance Choreographer',
    bio:
      "Emma is a dynamic and energetic instructor who brings her passion for dance and fitness to every class. With her vibrant personality and infectious energy, she leads high-energy dance fitness sessions that feel more like a party than a workout. Whether it's Zumba or cardio kickboxing, Emma's classes are designed to get your heart pumping and your body moving.",
    image: '/images/emma.jpg',
  },
  {
    name: 'Instructor Jessica',
    expertise: 'Pilates, Barre Fitness, Yoga Sculpt, Pilates Fusion',
    qualifications: 'Certified Pilates Instructor, Barre Certified, Yoga Sculpt Certified',
    bio:
      'Jessica is a versatile fitness instructor with a focus on mind-body connection and functional movement. With her background in Pilates, barre fitness, and yoga sculpt, she offers classes that strengthen and tone while improving flexibility and balance. Jessica\'s attention to detail and personalized modifications ensure that all participants feel challenged and supported.',
    image: '/images/jessica.jpg',
  },
];

export default function Instructors() {
  return (
    <div className={styles.instructors}>
         <h1 style={{ fontSize: '2.6rem', fontWeight: 'bold', marginBottom: '10px' }}>Instructors</h1>
      {instructorsData.map((instructor) => (
        <div key={instructor.name} className={styles.instructor}>
          <div className={styles.imageContainer}>
            <Image
              src={instructor.image}
              alt={instructor.name}
              width={300}
              height={300}
              style={{ borderRadius: '50%' }}
            />
          </div>
          <div className={styles.instructorDetails}>
            <h3 className={styles.instructorName}>{instructor.name}</h3>
            <p className={styles.instructorExpertise}>
              Fitness Expertise: {instructor.expertise}
            </p>
            <p className={styles.instructorQualifications}>
              Qualifications: {instructor.qualifications}
            </p>
            <p className={styles.instructorBio}>{instructor.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
