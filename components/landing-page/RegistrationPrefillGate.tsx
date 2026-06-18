'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { useVendorFormContext } from '@/contexts/become-a-vendor-form';
import { useDriverFormContext } from '@/contexts/become-a-rider-form';
import {
  useGetVendorRegistrationDetailsByVendor,
} from '@/hooks/api/become-a-vendor';
import {
  useGetRiderRegistrationDetailsByRider,
} from '@/hooks/api/become-a-rider';

export default function RegistrationPrefillGate() {
  const searchParams = useSearchParams();
  const vendorId = searchParams.get('vendorId') ?? undefined;
  const riderId = searchParams.get('riderId') ?? undefined;

  const { hydrateFromRegistrationDetails: hydrateVendor } =
    useVendorFormContext();
  const { hydrateFromRegistrationDetails: hydrateRider } =
    useDriverFormContext();
  const hydratedKeyRef = React.useRef<string | null>(null);

  const { data: vendorDetails } = useGetVendorRegistrationDetailsByVendor(
    Boolean(vendorId) && !riderId ? vendorId : undefined,
  );
  const { data: riderDetails } = useGetRiderRegistrationDetailsByRider(
    Boolean(riderId) && !vendorId ? riderId : undefined,
  );

  React.useEffect(() => {
    if (vendorDetails && hydratedKeyRef.current !== `vendor:${vendorDetails.vendorId}`) {
      hydratedKeyRef.current = `vendor:${vendorDetails.vendorId}`;
      hydrateVendor(vendorDetails);
    }
  }, [hydrateVendor, vendorDetails]);

  React.useEffect(() => {
    if (riderDetails && hydratedKeyRef.current !== `rider:${riderDetails.riderId}`) {
      hydratedKeyRef.current = `rider:${riderDetails.riderId}`;
      hydrateRider(riderDetails);
    }
  }, [hydrateRider, riderDetails]);

  return null;
}
