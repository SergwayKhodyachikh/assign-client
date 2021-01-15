import React from 'react'
import Link from 'components/shared/Link/Link'
import './PasswordRecoveryLink.scss'

export const PasswordRecoveryLink = () => {
  return (
    <div className="forget-password-link">
      <Link text="Forgot password?" to="/password-recovery" />
    </div>
  )
}
