import React from 'react';
import styles from '@/styles/Schedule.module.css';

const Schedule = () => {
  return (
    <div className={styles.scheduleBox} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>Schedule</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <div
          style={{
            border: '7px solid #0000',
            borderRadius: '10px',
            padding: '15px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            textAlign: 'center',
            flex: '1 0 300px',
          }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Monday</h2>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            6:00 AM - HIIT Circuit Training<br />
            Instructor: Coach Sarah
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            8:30 AM - Power Yoga<br />
            Instructor: Instructor Lisa
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            12:00 PM - Strength Training<br />
            Instructor: Coach Mark
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            5:30 PM - Dance Fitness<br />
            Instructor: Instructor Emma
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem' }}>
            7:00 PM - Pilates<br />
            Instructor: Instructor Jessica
          </p>
        </div>
        <div
          style={{
            border: '7px solid #0000',
            borderRadius: '10px',
            padding: '15px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            textAlign: 'center',
            flex: '1 0 300px',
          }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Tuesday</h2>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            7:30 AM - HIIT Cardio Blast<br />
            Instructor: Coach Sarah
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            9:00 AM - Vinyasa Yoga<br />
            Instructor: Instructor Lisa
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            12:30 PM - Core Conditioning<br />
            Instructor: Coach Mark
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            6:00 PM - Zumba<br />
            Instructor: Instructor Emma
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem' }}>
            7:30 PM - Barre Fitness<br />
            Instructor: Instructor Jessica
          </p>
        </div>
        <div
          style={{
            border: '7px solid #0000',
            borderRadius: '10px',
            padding: '15px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            textAlign: 'center',
            flex: '1 0 300px',
          }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Wednesday</h2>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            6:00 AM - Bootcamp<br />
            Instructor: Coach Sarah
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            8:30 AM - Hatha Yoga<br />
            Instructor: Instructor Lisa
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            12:00 PM - Total Body Sculpt<br />
            Instructor: Coach Mark
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            5:30 PM - Kickboxing<br />
            Instructor: Instructor Emma
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem' }}>
            7:00 PM - Yoga Sculpt<br />
            Instructor: Instructor Jessica
          </p>
        </div>
        <div
          style={{
            border: '7px solid #0000',
            borderRadius: '10px',
            padding: '15px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            textAlign: 'center',
            flex: '1 0 300px',
          }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Thursday</h2>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            7:30 AM - Tabata Training<br />
            Instructor: Coach Sarah
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            9:00 AM - Yin Yoga<br />
            Instructor: Instructor Lisa
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            12:30 PM - Resistance Band Workout<br />
            Instructor: Coach Mark
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            6:00 PM - Cardio Kickboxing<br />
            Instructor: Instructor Emma
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem' }}>
            7:30 PM - Pilates Fusion<br />
            Instructor: Instructor Jessica
          </p>
        </div>
        <div
          style={{
            border: '7px solid #0000',
            borderRadius: '10px',
            padding: '15px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            textAlign: 'center',
            flex: '1 0 300px',
          }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Friday</h2>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            6:00 AM - Circuit Training<br />
            Instructor: Coach Sarah
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            8:30 AM - Power Yoga<br />
            Instructor: Instructor Lisa
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            12:00 PM - Strength Training<br />
            Instructor: Coach Mark
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            5:30 PM - Dance Fitness<br />
            Instructor: Instructor Emma
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem' }}>
            7:00 PM - Pilates<br />
            Instructor: Instructor Jessica
          </p>
        </div>
        <div
          style={{
            border: '7px solid #0000',
            borderRadius: '10px',
            padding: '15px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            textAlign: 'center',
            flex: '1 0 300px',
          }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Saturday</h2>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            9:00 AM - HIIT Circuit Training<br />
            Instructor: Coach Sarah
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            10:30 AM - Vinyasa Yoga<br />
            Instructor: Instructor Lisa
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            12:00 PM - Core Conditioning<br />
            Instructor: Coach Mark
          </p>
          <p style={{ lineHeight: '1.2', maxHeight: '2.4em', fontSize: '1.6rem', marginBottom: '10px' }}>
            1:30 PM - Zumba<br />
            Instructor: Instructor Emma
          </p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;