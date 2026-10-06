import FormField from "../FormField";
import FormSection from "../FormSection";
import { rechallengeOptions } from "../../constants/formOptions";

export default function SuspectedDrugSection({ data, errors, onChange }) {
  return (
    <FormSection title="Characterization of drug role" description="Provide details of the suspected medicine.">
      <FormField label="Drug identification (name and generic)" name="suspectedDrugName" value={data.suspectedDrugName} onChange={onChange} required error={errors.suspectedDrugName} />
      <div className="grid grid-2">
        <FormField label="Batch number" name="batchNumber" value={data.batchNumber} onChange={onChange} />
        <FormField label="Manufacturing/expiry date" name="manufactureExpiryDate" type="date" value={data.manufactureExpiryDate} onChange={onChange} />
        <FormField label="Daily dose(s)" name="dailyDose" value={data.dailyDose} onChange={onChange} />
        <FormField label="Route of administration" name="routeOfAdministration" value={data.routeOfAdministration} onChange={onChange} />
      </div>
      <FormField label="Indication for use in the case" name="indication" type="textarea" rows="3" value={data.indication} onChange={onChange} />
      <div className="grid grid-2">
        <FormField label="Date of first use" name="drugStartDate" type="date" value={data.drugStartDate} onChange={onChange} />
        <FormField label="Date of last administration" name="lastAdministrationDate" type="date" value={data.lastAdministrationDate} onChange={onChange} />
        <FormField label="Was there a drug administration" name="duration" value={data.duration} onChange={onChange} />
        <FormField label="When was it administered" name="duration" value={data.duration} onChange={onChange} />
        <FormField label="Did reaction re-occur on re-administration?" name="rechallenge" value={data.rechallenge} onChange={onChange} options={rechallengeOptions} />
      </div>
    </FormSection>
  );
}
