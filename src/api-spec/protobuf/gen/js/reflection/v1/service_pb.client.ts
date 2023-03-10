/* eslint-disable */
// @generated by protobuf-ts 2.8.2 with parameter add_pb_suffix,eslint_disable,ts_nocheck,keep_enum_prefix,long_type_number
// @generated from protobuf file "reflection/v1/service.proto" (package "reflection.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
//
// Copyright 2016 The gRPC Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
// Service exported by server reflection.  A more complete description of how
// server reflection works can be found at
// https://github.com/grpc/grpc/blob/master/doc/server-reflection.md
//
// The canonical version of this proto can be found at
// https://github.com/grpc/grpc-proto/blob/master/grpc/reflection/v1/reflection.proto
//
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ReflectionService } from "./service_pb";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GetInfoResponse } from "./service_pb";
import type { GetInfoRequest } from "./service_pb";
import type { DuplexStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service reflection.v1.ReflectionService
 */
export interface IReflectionServiceClient {
    /**
     * The reflection service is structured as a bidirectional stream, ensuring
     * all related requests go to a single server.
     *
     * @generated from protobuf rpc: GetInfo(stream reflection.v1.GetInfoRequest) returns (stream reflection.v1.GetInfoResponse);
     */
    getInfo(options?: RpcOptions): DuplexStreamingCall<GetInfoRequest, GetInfoResponse>;
}
/**
 * @generated from protobuf service reflection.v1.ReflectionService
 */
export class ReflectionServiceClient implements IReflectionServiceClient, ServiceInfo {
    typeName = ReflectionService.typeName;
    methods = ReflectionService.methods;
    options = ReflectionService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * The reflection service is structured as a bidirectional stream, ensuring
     * all related requests go to a single server.
     *
     * @generated from protobuf rpc: GetInfo(stream reflection.v1.GetInfoRequest) returns (stream reflection.v1.GetInfoResponse);
     */
    getInfo(options?: RpcOptions): DuplexStreamingCall<GetInfoRequest, GetInfoResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetInfoRequest, GetInfoResponse>("duplex", this._transport, method, opt);
    }
}