import React from "react";
import { Result, Button, Modal } from "antd";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";
import { Skeleton } from "antd";
import { DotChartOutlined } from "@ant-design/icons";
import { Divider, Form, Radio, Space, Switch } from "antd";

function AntdLearn() {
  const [open, setOpen] = useState(false);
  const [openResponsive, setOpenResponsive] = useState(false);

  const [active, setActive] = useState(false);
  const [block, setBlock] = useState(false);
  const [size, setSize] = useState("default");
  const [buttonShape, setButtonShape] = useState("default");
  const [avatarShape, setAvatarShape] = useState("circle");
  const handleActiveChange = (checked) => {
    setActive(checked);
  };
  const handleBlockChange = (checked) => {
    setBlock(checked);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleShapeButton = (e) => {
    setButtonShape(e.target.value);
  };
  const handleAvatarShape = (e) => {
    setAvatarShape(e.target.value);
  };
  return (
    <>
      <>Learning Antd</>
      <Result
        status="success"
        title="Successfully completed your Exam"
        subTitle="15/15 Attempted"
        extra={[
          <Button type="primary" key="console">
            Check Answers
          </Button>,
          <Button key="buy">Practice</Button>,
        ]}
      />
      <div>
        <Button type="primary" onClick={() => setOpenResponsive(true)}>
          Open Modal of responsive width
        </Button>
        <Modal
          title="Modal responsive width"
          centered
          open={openResponsive}
          onOk={() => setOpenResponsive(false)}
          onCancel={() => setOpenResponsive(false)}
          width={{
            xs: "90%",
            sm: "80%",
            md: "70%",
            lg: "60%",
            xl: "50%",
            xxl: "40%",
          }}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
      <div>
        <Flex align="center" gap="middle">
          <Spin indicator={<LoadingOutlined spin />} size="small" />
          <Spin indicator={<LoadingOutlined spin />} />
          <Spin indicator={<LoadingOutlined spin />} size="large" />
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </Flex>
      </div>
      <div>
        <Skeleton />
      </div>

      <div>
        <Flex gap="middle" vertical>
          <Space>
            <Skeleton.Button
              active={active}
              size={size}
              shape={buttonShape}
              block={block}
            />
            <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
            <Skeleton.Input active={active} size={size} />
          </Space>
          <Skeleton.Button
            active={active}
            size={size}
            shape={buttonShape}
            block={block}
          />
          <Skeleton.Input active={active} size={size} block={block} />
          <Space>
            <Skeleton.Image active={active} />
            <Skeleton.Node active={active} style={{ width: 160 }} />
            <Skeleton.Node active={active}>
              <DotChartOutlined style={{ fontSize: 40, color: "#bfbfbf" }} />
            </Skeleton.Node>
          </Space>
          <Divider />
          <Form layout="inline" style={{ margin: "16px 0" }}>
            <Space size={16} wrap>
              <Form.Item label="Active">
                <Switch checked={active} onChange={handleActiveChange} />
              </Form.Item>
              <Form.Item label="Button and Input Block">
                <Switch checked={block} onChange={handleBlockChange} />
              </Form.Item>
              <Form.Item label="Size">
                <Radio.Group value={size} onChange={handleSizeChange}>
                  <Radio.Button value="default">Default</Radio.Button>
                  <Radio.Button value="large">Large</Radio.Button>
                  <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Button Shape">
                <Radio.Group value={buttonShape} onChange={handleShapeButton}>
                  <Radio.Button value="default">Default</Radio.Button>
                  <Radio.Button value="square">Square</Radio.Button>
                  <Radio.Button value="round">Round</Radio.Button>
                  <Radio.Button value="circle">Circle</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Avatar Shape">
                <Radio.Group value={avatarShape} onChange={handleAvatarShape}>
                  <Radio.Button value="square">Square</Radio.Button>
                  <Radio.Button value="circle">Circle</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Space>
          </Form>
        </Flex>
      </div>
    </>
  );
}

export default AntdLearn;
