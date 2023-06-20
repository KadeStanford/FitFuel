import React, { useState } from 'react';
import styles from '@/styles/Classes.module.css';
import Image from 'next/image';

const classesData = [
    {
        title: 'HIIT Circuit Training',
        instructor: 'Coach Sarah',
        description: 'Join Coach Sarah for an intense circuit training class that combines high-intensity exercises with short recovery periods. Improve your cardiovascular endurance, strength, and overall fitness.',
        group: 'Cardiovascular',
      },
      {
        title: 'HIIT Cardio Blast',
        instructor: 'Coach Sarah',
        description: 'Experience a heart-pumping cardio blast with Coach Sarah\'s high-intensity interval training class. Torch calories, increase your metabolism, and boost your cardiovascular fitness.',
        group: 'Cardiovascular',
      },
      {
        title: 'Tabata Training',
        instructor: 'Coach Sarah',
        description: 'Get ready for a Tabata training session with Coach Sarah. This high-intensity workout involves short bursts of all-out effort followed by brief recovery periods, resulting in improved endurance and calorie burn.',
        group: 'Cardiovascular',
      },
      {
        title: 'Cardio Kickboxing',
        instructor: 'Instructor Emma',
        description: 'Join Instructor Emma for an exhilarating cardio kickboxing class that combines martial arts moves with high-energy cardio exercises. Burn calories, improve coordination, and unleash your inner fighter.',
        group: 'Cardiovascular',
      },
      {
        title: 'Dance Fitness',
        instructor: 'Instructor Emma',
        description: 'Dance your way to fitness with Instructor Emma\'s fun and energetic dance fitness class. Groove to the rhythm, improve cardiovascular health, and have a blast while getting in shape.',
        group: 'Cardiovascular',
      },
      {
        title: 'Zumba',
        instructor: 'Instructor Emma',
        description: 'Join Instructor Emma for a Zumba class filled with lively dance moves set to Latin rhythms. Burn calories, boost your energy, and enjoy a fantastic workout with a party-like atmosphere.',
        group: 'Cardiovascular',
      },
      {
        title: 'Dance Cardio',
        instructor: 'Instructor Emma',
        description: 'Let loose and dance your way to fitness in Instructor Emma\'s high-energy dance cardio class. Improve your cardiovascular endurance, coordination, and overall cardiovascular health.',
        group: 'Cardiovascular',
      },
      {
        title: 'Strength Training',
        instructor: 'Coach Mark',
        description: 'Coach Mark will guide you through a challenging strength training session designed to build muscle, increase strength, and enhance overall body composition. Get ready to lift, tone, and strengthen.',
        group: 'Strength and Conditioning',
      },
      {
        title: 'Core Conditioning',
        instructor: 'Coach Mark',
        description: 'Join Coach Mark for a core conditioning class that targets and strengthens your abdominal muscles, obliques, and lower back. Improve your core stability, posture, and functional strength.',
        group: 'Strength and Conditioning',
      },
      {
        title: 'Total Body Sculpt',
        instructor: 'Coach Mark',
        description: 'Coach Mark\'s total body sculpt class offers a full-body workout focusing on toning and sculpting your muscles. Through a combination of exercises, you\'ll improve strength, endurance, and overall body composition.',
        group: 'Strength and Conditioning',
      },
      {
        title: 'Resistance Band Workout',
        instructor: 'Coach Mark',
        description: 'Discover the benefits of resistance band training with Coach Mark. This class utilizes resistance bands to target specific muscle groups, improve strength, and enhance overall muscle tone.',
        group: 'Strength and Conditioning',
      },
      {
        title: 'Bootcamp',
        instructor: 'Coach Sarah',
        description: 'Experience an intense bootcamp-style workout with Coach Sarah. This class combines challenging exercises, circuit training, and high-intensity intervals to push your limits and achieve maximum results.',
        group: 'Strength and Conditioning',
      },
      {
        title: 'Circuit Training',
        instructor: 'Coach Sarah',
        description: 'Join Coach Sarah for a dynamic circuit training class that combines cardio, strength, and endurance exercises. This full-body workout will challenge you and improve your overall fitness level.',
        group: 'Strength and Conditioning',
      },
      {
        title: 'Power Yoga',
        instructor: 'Instructor Lisa',
        description: 'Elevate your yoga practice with Instructor Lisa\'s power yoga class. This dynamic and challenging yoga style focuses on building strength, flexibility, and mindfulness through a series of flowing movements.',
        group: 'Yoga and Mindfulness',
      },
      {
        title: 'Vinyasa Yoga',
        instructor: 'Instructor Lisa',
        description: 'Flow through a sequence of poses and movements in Instructor Lisa\'s vinyasa yoga class. This dynamic yoga practice synchronizes breath with movement to enhance flexibility, strength, and mental focus.',
        group: 'Yoga and Mindfulness',
      },
      {
        title: 'Hatha Yoga',
        instructor: 'Instructor Lisa',
        description: 'Experience the balance of strength and flexibility in Instructor Lisa\'s hatha yoga class. This gentle yet invigorating practice incorporates physical postures, breathing exercises, and meditation techniques.',
        group: 'Yoga and Mindfulness',
      },
      {
        title: 'Yin Yoga',
        instructor: 'Instructor Lisa',
        description: 'Join Instructor Lisa for a calming and restorative yin yoga class. This slow-paced practice involves long-held poses that target connective tissues, promoting relaxation, flexibility, and stress relief.',
        group: 'Yoga and Mindfulness',
      },
      {
        title: 'Pilates',
        instructor: 'Instructor Jessica',
        description: 'Instructor Jessica\'s pilates class focuses on core strength, stability, and flexibility. Through a series of precise movements, you\'ll improve posture, balance, and overall body awareness.',
        group: 'Pilates and Barre',
      },
      {
        title: 'Barre Fitness',
        instructor: 'Instructor Jessica',
        description: 'Join Instructor Jessica for a barre fitness class that combines ballet-inspired movements with elements of pilates and strength training. Sculpt and lengthen your muscles while improving posture and balance.',
        group: 'Pilates and Barre',
      },
      {
        title: 'Pilates Fusion',
        instructor: 'Instructor Jessica',
        description: 'Experience a fusion of pilates, yoga, and strength training in Instructor Jessica\'s class. This full-body workout emphasizes core strength, flexibility, and muscular endurance for a balanced and effective session.',
        group: 'Pilates and Barre',
      },
      {
        title: 'Yoga Sculpt',
        instructor: 'Instructor Jessica',
        description: 'Challenge your body and mind with Instructor Jessica\'s yoga sculpt class. This dynamic practice combines yoga, strength training, and cardio exercises, providing a comprehensive workout and promoting lean muscle development.',
        group: 'Fusion and Specialty',
      },
      {
        title: 'Kickboxing',
        instructor: 'Instructor Emma',
        description: 'Join Instructor Emma for an intense kickboxing workout that combines punches, kicks, and cardio movements to improve cardiovascular fitness, coordination, and strength.',
        group: 'Fusion and Specialty',
      },
];

const instructorData = {
    'Coach Sarah': '/images/sarah.jpg',
    'Instructor Emma': '/images/emma.jpg',
    'Instructor Lisa': '/images/linda.jpg',
    'Instructor Jessica': '/images/jessica.jpg',
    'Coach Mark': '/images/mark.jpg',
  };

const Classes = () => {
  const [selectedGroup, setSelectedGroup] = useState('');

  const handleGroupChange = (group) => {
    setSelectedGroup(group);
  };

  const filteredClasses = selectedGroup ? classesData.filter((classItem) => classItem.group === selectedGroup) : classesData;

  const getInstructorImage = (name) => {
    return instructorData[name] || '/images/default.jpg';
  };

  return (
    <div className={styles.classesContainer}>
      <h1 style={{ color: '#ffffff', fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>Classes</h1>
      <div className={styles.filterContainer}>
        <span className={`${styles.filterOption} ${selectedGroup === '' && styles.active}`} onClick={() => handleGroupChange('')}>All</span>
        <span className={`${styles.filterOption} ${selectedGroup === 'Cardiovascular' && styles.active}`} onClick={() => handleGroupChange('Cardiovascular')}>Cardiovascular</span>
        <span className={`${styles.filterOption} ${selectedGroup === 'Strength and Conditioning' && styles.active}`} onClick={() => handleGroupChange('Strength and Conditioning')}>Strength and Conditioning</span>
        <span className={`${styles.filterOption} ${selectedGroup === 'Yoga and Mindfulness' && styles.active}`} onClick={() => handleGroupChange('Yoga and Mindfulness')}>Yoga</span>
        <span className={`${styles.filterOption} ${selectedGroup === 'Pilates and Barre' && styles.active}`} onClick={() => handleGroupChange('Pilates and Barre')}>Pilates and Barre</span>
        <span className={`${styles.filterOption} ${selectedGroup === 'Fusion and Specialty' && styles.active}`} onClick={() => handleGroupChange('Fusion and Specialty')}>Fusion and Specialty</span>
      </div>
      <div className={styles.classesList}>
        {filteredClasses.map((classItem, index) => (
          <div className={styles.classItem} key={index}>
            <h2 className={styles.classTitle}>{classItem.title}</h2>
            <div className={styles.instructorContainer}>
              <Image
                src={getInstructorImage(classItem.instructor)}
                alt={classItem.instructor}
                width={150}
                height={150}
                style={{ borderRadius: '50%' }}
              />
              <p className={styles.classInstructor}>{classItem.instructor}</p>
            </div>
            <p className={styles.classDescription}>{classItem.description}</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Classes;
