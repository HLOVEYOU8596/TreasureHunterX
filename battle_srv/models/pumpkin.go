package models

import "github.com/ByteArena/box2d"

type Pumpkin struct {
	LocalIdInBattle  int32         `protobuf:"varint,1,opt,name=localIdInBattle,proto3" json:"localIdInBattle,omitempty"`
	LinearSpeed      float64       `protobuf:"fixed64,2,opt,name=linearSpeed,proto3" json:"linearSpeed,omitempty"`
	X                float64       `protobuf:"fixed64,3,opt,name=x,proto3" json:"x,omitempty"`
	Y                float64       `protobuf:"fixed64,4,opt,name=y,proto3" json:"y,omitempty"`
	Removed          bool          `protobuf:"varint,5,opt,name=removed,proto3" json:"removed,omitempty"`
	Dir              *Direction    `json:"-"`
	CollidableBody   *box2d.B2Body `json:"-"`
	RemovedAtFrameId int32         `json:"-"`
}