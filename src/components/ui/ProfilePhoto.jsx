import { useState } from 'react'
import profileImage from '../../assets/profile picture/WhatsApp Image 2026-10-19 at 9.45.15 PM.jpeg'

export function ProfilePhoto({ className = '' }) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <div className={`profile-photo ${className}`}>
      {!imageFailed ? (
        <img
          src={profileImage}
          alt="Portrait of Ajolaye Dennis"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span aria-label="Ajolaye Dennis">AD</span>
      )}
    </div>
  )
}
