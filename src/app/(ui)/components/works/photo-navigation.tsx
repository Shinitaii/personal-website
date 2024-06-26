import NavLink from "../nav-link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from 'next/image';

interface PhotoNavigationProps {
    currentPhotoIndex: number;
    totalPhotos: number;
    currentPhoto: string;
    onPreviousPhoto: () => void;
    onNextPhoto: () => void;
}

const PhotoNavigation: React.FC<PhotoNavigationProps> = ({
    currentPhotoIndex,
    totalPhotos,
    currentPhoto,
    onPreviousPhoto,
    onNextPhoto,
}) => (
    <>
    {totalPhotos < 1 ?
        <>
            <div className='flex h-full justify-between items-center'>
                <NavLink title={<FaChevronLeft size={20} />} href={""} onPressed={onPreviousPhoto} />
                <div className='relative w-full h-full flex justify-center items-center'>
                    <Image src={currentPhoto} fill={true} alt='' />
                </div>
                <NavLink title={<FaChevronRight size={20} />} href={""} onPressed={onNextPhoto} />
            </div>
            <div className='flex justify-center'>
                {currentPhotoIndex + 1} / {totalPhotos}
            </div>
        </>
    :
        <div className="flex h-full justify-center items-center">
            <p className='text-xs md:text-xl'>No photos provided.</p>
        </div>
    }
    </>
);

export default PhotoNavigation;