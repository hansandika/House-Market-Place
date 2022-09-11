import { Link } from 'react-router-dom';
import { ReactComponent as DeleteIcon } from '../assets/svg/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../assets/svg/editIcon.svg';
import bedIcon from '../assets/svg/bedIcon.svg';
import bathubIcon from '../assets/svg/bathtubIcon.svg';

export default function ListingItem({ listing, id, onEdit, onDelete }) {
  return (
    <li className='categoryListing'>
      <Link
        to={`/category/${listing.type}/${id}`}
        className='categoryListingLink'
      >
        <img
          src={listing.imageUrls[0]}
          alt={listing.name}
          className='categoryListingImg'
        />
      </Link>
      <div className='categoryListingDetails'>
        <p className='categoryListingLocation'>{listing.location}</p>
        <p className='categoryListingName'>{listing.name}</p>
        <p className='categoryListingPrice'>
          ${listing.offer ? listing.discountedPrice : listing.regularPrice}
          {listing.type === 'rent' && ' / M onth'}
        </p>
        <div className='categoryListingInfoDiv'>
          <img src={bedIcon} alt='bed' />
          <p className='categoryListingInfoText'>
            {listing.bedrooms > 1
              ? `${listing.bedrooms} Bedrooms`
              : `${listing.bedrooms} Bedroom`}
          </p>
          <img src={bathubIcon} alt='' />
          <p className='categoryListingInfoText'>
            {listing.bathrooms > 1
              ? `${listing.bathrooms} Bathrooms`
              : `${listing.bathrooms} Bathroom`}
          </p>
        </div>
      </div>

      {onDelete && (
        <DeleteIcon
          className='removeIcon'
          fill='rgb(231,76,60)'
          onClick={() => onDelete(id, listing.name)}
        />
      )}

      {onEdit && (
        <EditIcon
          className='editIcon'
          fill='rgb(52,152,219)'
          onClick={() => onEdit(id)}
        />
      )}
    </li>
  );
}
