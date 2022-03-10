import React from "react";
import { OpenAPIV3 } from "openapi-types";
import { CommonSwaggerProps } from "../utils";

interface IApiDetailProps {
  detail: OpenAPIV3.OperationObject;
  path: string;
  method: OpenAPIV3.HttpMethods;
}
class ApiDetail extends React.Component<CommonSwaggerProps & IApiDetailProps> {
  constructor(props: CommonSwaggerProps & IApiDetailProps) {
    super(props);
  }
  render(): React.ReactNode {
    const { detail, path, method } = this.props;
    const { schema, example, examples,  } = (detail.requestBody as OpenAPIV3.RequestBodyObject).content['application/json']
    console.log("aaaaa", path, method );
    // console.log(this.props.specSelectors.specResolvedSubtree(["paths", path, method]))
    return (
      <div>
        <div>{ detail.description }</div>
        <div>{(detail.requestBody as OpenAPIV3.RequestBodyObject).description}</div>
        <h4>请求参数</h4>
        </div>
    );
  }
}

export default class ApiCard extends React.Component<CommonSwaggerProps> {
  constructor(props: CommonSwaggerProps) {
    super(props);
  }
  render(): React.ReactNode {
    let { specSelectors } = this.props;
    const taggedOps = specSelectors.taggedOperations().toJS() as Record<
      string,
      {
        operations: {
          id: string,
          method: OpenAPIV3.HttpMethods,
          path: string,
          operation: OpenAPIV3.OperationObject
        }[];
        tagDetail: OpenAPIV3.TagObject;
      }
    >;
    return (
      <div>
        {Object.keys(taggedOps).map((tag: string) => (
          <div key={`operation-${tag}`}>
            <h1>{tag}</h1>
            {taggedOps[tag]['operations'].map((op) => (
                <ApiDetail
                  key={`operation-${tag}-${op['id']}`}
                  method={op['method']}
                  path={op['path']}
                  detail={op.operation}
                  {...this.props}
                />
              ))
              }
          </div>
        ))}
      </div>
    );
  }
}
