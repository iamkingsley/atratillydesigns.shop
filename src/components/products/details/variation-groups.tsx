import Attribute from '@components/ui/attribute';
import { useAttributes } from './attributes.context';

interface Props {
  variations: any;
}
const VariationGroups: React.FC<Props> = ({ variations }) => {
  const { attributes, setAttributes } = useAttributes();
  console.log('variations: ', variations)
  return (
    <>
      {Object.keys(variations).map((variationName, index) => (
        <div
          className="py-4 border-b border-border-200  border-opacity-70 first:pt-0 flex items-center"
          key={index}
        >
          <span className="text-sm font-semibold text-heading leading-none capitalize me-4 min-w-[60px] inline-block">
            {variationName}:
          </span>
          <div className="w-full flex space-s-4 overflow-x-auto">
            {variations[variationName].map((attribute: any, i) => {
            console.log('variationName: ', variationName)
            console.log('attribute: ', attribute)
            console.log('attributes..: ', attributes)
            return (
              <Attribute
                className={variationName}
                color={attribute.value[0].meta ? attribute.value[0].meta : attribute?.value[0].value}
                active={attributes[variationName] === attribute.value[0]}
                value={attribute.value[0].value}
                key={attribute.id}
                onClick={() =>
                  setAttributes((prev: any) => ({
                    ...prev,
                    [variationName]: attribute.value[0],
                  }))
                }
              />
            )})}
          </div>
        </div>
      ))}
      {/* {Object.keys(variations).map((variationName, index) => (
        <div
          className="py-4 border-b border-border-200  border-opacity-70 first:pt-0 flex items-center"
          key={index}
        >
          <span className="text-sm font-semibold text-heading leading-none capitalize me-4 min-w-[60px] inline-block">
            {variationName}:
          </span>
          <div className="w-full flex space-s-4 overflow-x-auto">
            {variations[variationName].map((attribute: any, i) => (
              <Attribute
                className={variationName}
                color={attribute.value.meta ? attribute.value.meta : attribute?.value}
                active={attributes[variationName] === attribute.value}
                value={attribute.value}
                key={attribute.id}
                onClick={() =>
                  setAttributes((prev: any) => ({
                    ...prev,
                    [variationName]: attribute.value,
                  }))
                }
              />
            ))}
          </div>
        </div>
      ))} */}
    </>
  );
};

export default VariationGroups;
