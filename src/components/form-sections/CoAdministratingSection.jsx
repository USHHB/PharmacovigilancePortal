import FormField from "../FormField";
import FormSection from "../FormSection";

export default function CoAdministratingSection({ data, onChange }) {
  return (
    <FormSection
      title="Co-administrating"
      description="Add a medicine taken alongside the suspected drug, if applicable."
    >
      <FormField
        label="Drug identification (name)"
        name="concomitantDrugName"
        value={data.concomitantDrugName}
        onChange={onChange}
      />
      <div className="grid grid-2">
        <FormField
          label="Date of first use"
          name="concomitantStartDate"
          type="date"
          value={data.concomitantStartDate}
          onChange={onChange}
        />
        <FormField
          label="Date of last administration"
          name="concomitantLastAdministration"
          type="date"
          value={data.concomitantLastAdministration}
          onChange={onChange}
        />
      </div>
    </FormSection>
  );
}
