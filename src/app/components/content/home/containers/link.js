import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function LinkContainer(){
    return (
        <div>
            <Link href="https://github.com/Shinitaii"><FontAwesomeIcon icon={faGithub}/></Link>
            <Link href="https://www.linkedin.com/in/richmond-glenn-viloria-711867279/"><FontAwesomeIcon icon={faLinkedin}/></Link>
            <Link href="https://shinitaii.itch.io/"><FontAwesomeIcon icon={faItchIo}/></Link>
            <Link href="mailto:rgviloria1@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></Link>
        </div>
    )
}